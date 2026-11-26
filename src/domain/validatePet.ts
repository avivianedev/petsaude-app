type PetFormData = {
  name: string;
  species: string;
  sex: string;
};

type PetFormErrors = {
  name?: string;
  species?: string;
  sex?: string;
};

export const validatePet = (form: PetFormData): PetFormErrors => {
  const errors: PetFormErrors = {};
  const trimmedName = form.name.trim();

  if (trimmedName.length === 0) errors.name = 'O nome não pode ser em branco';
  if (!form.species) errors.species = 'Selecione a espécie';
  if (!form.sex) errors.sex = 'Selecione o sexo do animal';

  return errors;
};
