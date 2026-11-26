import { validatePet } from './validatePet';

const validForm = { name: 'Rex', species: 'Cão', sex: 'Macho' };

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
});
