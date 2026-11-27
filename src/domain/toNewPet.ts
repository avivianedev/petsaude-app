import type { NewPet } from '@/repositories/petRepository';

type PetForm = {
  name: string;
  species: string;
  sex: string;
  microchip: string;
  breed: string;
  birthDate: string;
  //   weight: string;
  otherSpecies: string;
  //   neutered: string;
  coat: string;
};

export const toNewPet = (form: PetForm): NewPet => {
  const species =
    form.species === 'Outro' ? form.otherSpecies.trim() : form.species;

  const newPet: NewPet = {
    nome_pet: form.name.trim(),
    especie: species,
    sexo: form.sex,
    pelagem: form.coat.trim() || undefined,
    raca: form.breed.trim() || undefined,
    data_nascimento: form.birthDate || undefined,
    microchip: form.microchip || undefined,
  };

  return newPet;
};
