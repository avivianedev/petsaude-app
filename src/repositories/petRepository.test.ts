import {
  createTestDatabase,
  type TestDatabase,
} from '@/test-utils/createTestDatabase';

import { createPet, getPetById } from './petRepository';
import { createTables } from './schema';

describe('petRepository', () => {
  let db: TestDatabase;

  beforeEach(async () => {
    db = await createTestDatabase();
    await createTables(db);
  });
  afterEach(async () => {
    await db.closeAsync();
  });

  it('saves a pet and returns the same data when fetched by id', async () => {
    const newPet = {
      nome_pet: 'Thor',
      especie: 'Cão',
      sexo: 'Macho',
      raca: 'Labrador',
      peso: 4.5,
      castrado: 1,
    };

    const id = await createPet(db, newPet);
    const pet = await getPetById(db, id);

    expect(pet).toEqual({
      id_pet: id,
      nome_pet: 'Thor',
      especie: 'Cão',
      sexo: 'Macho',
      id_tutor: null,
      pelagem: null,
      data_nascimento: null,
      raca: 'Labrador',
      peso: 4.5,
      foto: null,
      microchip: null,
      castrado: 1,
    });
  });

  it('returns null when the pet does not exist', async () => {
    const pet = await getPetById(db, 999);

    expect(pet).toBeNull();
  });
  it('stores null in the optional fields that were not provided', async () => {
    const id = await createPet(db, {
      nome_pet: 'Mia',
      especie: 'Gato',
      sexo: 'Fêmea',
    });

    const pet = await getPetById(db, id);

    expect(pet?.raca).toBeNull();
    expect(pet?.peso).toBeNull();
    expect(pet?.castrado).toBeNull();
  });
  it('rejects a pet linked to a tutor that does not exist', async () => {
    await expect(
      createPet(db, {
        nome_pet: 'Rex',
        especie: 'Cão',
        sexo: 'Macho',
        id_tutor: 999,
      }),
    ).rejects.toThrow(/FOREIGN KEY/);
  });
  it('treats malicious text as plain data, not as SQL', async () => {
    const maliciousName = "Rex'); DROP TABLE pet;--";

    const id = await createPet(db, {
      nome_pet: maliciousName,
      especie: 'Cão',
      sexo: 'Macho',
    });
    const pet = await getPetById(db, id);
    expect(pet?.nome_pet).toBe(maliciousName);
  });
});
