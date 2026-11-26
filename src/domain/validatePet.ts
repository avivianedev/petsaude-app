type PetFormData = {
  name: string;
};

type PetFormErrors = {
  name?: string;
};

export const validatePet = (form: PetFormData): PetFormErrors => {
  const errors: PetFormErrors = {};
  const trimmedName = form.name.trim();
  if (trimmedName.length === 0) errors.name = 'O nome não pode ser em branco';

  return errors;
};
