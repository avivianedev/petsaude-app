import { validatePet } from './validatePet';

const validForm = {
  name: 'Rex',
  species: 'Cão',
  sex: 'Macho',
  otherSpecies: 'Coelho',
};

describe('validatePet', () => {
  it('returns no errors when the name is filled', () => {
    const name = 'Rex';
    const result = validatePet({ ...validForm, name });
    expect(result).toEqual({});
  });
  it('returns an error when the name is empty', () => {
    const name = '';
    const result = validatePet({ ...validForm, name });
    expect(result).toEqual({ name: 'O nome não pode ser em branco' });
  });
  it('returns an error when the name has only spaces', () => {
    const name = '   ';
    const result = validatePet({ ...validForm, name });
    expect(result).toEqual({ name: 'O nome não pode ser em branco' });
  });
  it('returns an error when the species is empty', () => {
    const species = '';
    const result = validatePet({ ...validForm, species });
    expect(result).toEqual({ species: 'Selecione a espécie' });
  });

  it('returns an error when the sex is empty', () => {
    const sex = '';
    const result = validatePet({ ...validForm, sex });
    expect(result).toEqual({ sex: 'Selecione o sexo do animal' });
  });
  it('returns an error when species is "Outro" and otherSpecies is empty', () => {
    const otherSpecies = '';
    const result = validatePet({
      ...validForm,
      species: 'Outro',
      otherSpecies,
    });
    expect(result).toEqual({ otherSpecies: 'Informar o nome da espécie' });
  });
  it('returns no errors when species is "Outro" and the otherSpecies is filled', () => {
    const otherSpecies = 'Coelho';
    const result = validatePet({
      ...validForm,
      species: 'Outro',
      otherSpecies,
    });
    expect(result).toEqual({});
  });
});
