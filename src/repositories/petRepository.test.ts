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
});
