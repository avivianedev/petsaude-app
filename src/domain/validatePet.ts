type PetFormData = {
  name: string;
  species: string;
  sex: string;
  otherSpecies?: string;
  birthDate?: string;
};

type PetFormErrors = {
  name?: string;
  species?: string;
  sex?: string;
  otherSpecies?: string;
  birthDate?: string;
};

export const validatePet = (
  form: PetFormData,
  today: string,
): PetFormErrors => {
  const errors: PetFormErrors = {};
  const trimmedName = form.name.trim();

  if (trimmedName.length === 0) errors.name = 'O nome não pode ser em branco';
  if (!form.species) errors.species = 'Selecione a espécie';
  if (!form.sex) errors.sex = 'Selecione o sexo do animal';

  if (form.species === 'Outro') {
    const trimmedNameSpecies = form.otherSpecies?.trim();
    if (trimmedNameSpecies?.length === 0)
      errors.otherSpecies = 'Informar o nome da espécie';
  }
  if (form.birthDate) {
    if (form.birthDate > today)
      errors.birthDate = 'Data não pode ser superior que a atual';
  }

  return errors;
};
