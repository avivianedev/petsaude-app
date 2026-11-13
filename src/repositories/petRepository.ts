import type { Database } from './types';

export interface NewPet {
  nome_pet: string;
  especie: string;
  sexo: string;
  id_tutor?: number;
  pelagem?: string;
  data_nascimento?: string;
  raca?: string;
  peso?: number;
  foto?: string;
  microchip?: string;
  castrado?: number;
}

export interface Pet {
  id_pet: number;
  nome_pet: string;
  especie: string;
  sexo: string;
  id_tutor: number | null;
  pelagem: string | null;
  data_nascimento: string | null;
  raca: string | null;
  peso: number | null;
  foto: string | null;
  microchip: string | null;
  castrado: number | null;
}

export const createPet = async (db: Database, pet: NewPet): Promise<number> => {
  const result = await db.runAsync(
    `
           INSERT INTO pet
           (nome_pet, especie, sexo, id_tutor, pelagem,data_nascimento, raca, 
           peso, foto,microchip, castrado) 
           VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
    [
      pet.nome_pet,
      pet.especie,
      pet.sexo,
      pet.id_tutor ?? null,
      pet.pelagem ?? null,
      pet.data_nascimento ?? null,
      pet.raca ?? null,
      pet.peso ?? null,
      pet.foto ?? null,
      pet.microchip ?? null,
      pet.castrado ?? null,
    ],
  );
  return result.lastInsertRowId;
};

export const getPetById = async (
  db: Database,
  id: number,
): Promise<Pet | null> => {
  const pet = await db.getFirstAsync<Pet>(
    'SELECT * FROM pet WHERE id_pet = ?',
    [id],
  );

  return pet;
};
