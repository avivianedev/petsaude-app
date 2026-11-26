import { validatePet } from './validatePet';

describe('validatePet - name', () => {
  it('returns no errors when the name is filled', () => {
    const name = 'Rex';
    const result = validatePet({ name });
    expect(result).toEqual({});
  });
  it('returns an error when the name is empty', () => {
    const name = '';
    const result = validatePet({ name });
    expect(result).toEqual({ name: 'O nome não pode ser em branco' });
  });
  it('returns an error when the name has only spaces', () => {
    const name = '   ';
    const result = validatePet({ name });
    expect(result).toEqual({ name: 'O nome não pode ser em branco' });
  });
});
