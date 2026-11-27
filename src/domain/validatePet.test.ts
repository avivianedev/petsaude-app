import { validatePet } from './validatePet';

const validForm = {
  name: 'Rex',
  species: 'Cão',
  sex: 'Macho',
  otherSpecies: 'Coelho',
  birthDate: '',
};
const today = '2026-11-27';

describe('validatePet', () => {
  it('returns no errors when the name is filled', () => {
    const name = 'Rex';
    const result = validatePet({ ...validForm, name }, today);
    expect(result).toEqual({});
  });
  it('returns an error when the name is empty', () => {
    const name = '';
    const result = validatePet({ ...validForm, name }, today);
    expect(result).toEqual({ name: 'O nome não pode ser em branco' });
  });
  it('returns an error when the name has only spaces', () => {
    const name = '   ';
    const result = validatePet({ ...validForm, name }, today);
    expect(result).toEqual({ name: 'O nome não pode ser em branco' });
  });
  it('returns an error when the species is empty', () => {
    const species = '';
    const result = validatePet({ ...validForm, species }, today);
    expect(result).toEqual({ species: 'Selecione a espécie' });
  });

  it('returns an error when the sex is empty', () => {
    const sex = '';
    const result = validatePet({ ...validForm, sex }, today);
    expect(result).toEqual({ sex: 'Selecione o sexo do animal' });
  });
  it('returns an error when species is "Outro" and otherSpecies is empty', () => {
    const otherSpecies = '';
    const result = validatePet(
      {
        ...validForm,
        species: 'Outro',
        otherSpecies,
      },
      today,
    );
    expect(result).toEqual({ otherSpecies: 'Informar o nome da espécie' });
  });
  it('returns no errors when species is "Outro" and the otherSpecies is filled', () => {
    const otherSpecies = 'Coelho';
    const result = validatePet(
      {
        ...validForm,
        species: 'Outro',
        otherSpecies,
      },
      today,
    );
    expect(result).toEqual({});
  });
  it('returns an error when birthDate is after today', () => {
    const birthDate = '2026-11-28';
    const result = validatePet({ ...validForm, birthDate }, today);
    expect(result).toEqual({
      birthDate: 'Data não pode ser superior que a atual',
    });
  });
  it('returns no errors when the date is not filled', () => {
    const birthDate = '';
    const result = validatePet({ ...validForm, birthDate }, today);
    expect(result).toEqual({});
  });
  it('returns no errors when the date is today', () => {
    const birthDate = '2026-11-27';
    const result = validatePet({ ...validForm, birthDate }, today);
    expect(result).toEqual({});
  });
});
