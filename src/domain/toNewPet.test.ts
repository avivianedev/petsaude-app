import { toNewPet } from './toNewPet';

const validForm = {
  name: 'Viviane',
  species: 'Cão',
  sex: 'Macho',
  otherSpecies: 'Coelho',
  breed: '',
  birthDate: '',
  coat: '',
  microchip: '',
};

describe('toNewPet', () => {
  it('removes leading and trailing spaces from the name', () => {
    const name = '   Viviane   ';
    const result = toNewPet({ ...validForm, name: name });

    expect(result.nome_pet).toBe('Viviane');
  });
  it('keeps the selected species', () => {
    const species = 'Cão';
    const result = toNewPet({ ...validForm, species });

    expect(result.especie).toBe('Cão');
  });
  it('uses the name of the other species when the species is "Outro"', () => {
    const species = 'Outro';
    const otherSpecies = 'Coelho';
    const result = toNewPet({ ...validForm, species, otherSpecies });

    expect(result.especie).toBe('Coelho');
  });
  it('saves empty optional fields as undefined', () => {
    const result = toNewPet(validForm);

    expect(result.data_nascimento).toBeUndefined();
    expect(result.pelagem).toBeUndefined();
    expect(result.raca).toBeUndefined();
    expect(result.microchip).toBeUndefined();
  });

  it('maps each filled field to its database column', () => {
    const coat = 'Dourada';
    const breed = 'Golden Retriever';
    const birthDate = '2025-01-08';
    const microchip = '123456789';

    const result = toNewPet({
      ...validForm,
      coat,
      breed,
      birthDate,
      microchip,
    });

    expect(result.data_nascimento).toBe(birthDate);
    expect(result.pelagem).toBe(coat);
    expect(result.raca).toBe(breed);
    expect(result.microchip).toBe(microchip);
  });
  it('treats fields with only spaces as empty', () => {
    const coat = '  ';
    const breed = '  ';

    const result = toNewPet({
      ...validForm,
      coat,
      breed,
    });

    expect(result.pelagem).toBeUndefined();
    expect(result.raca).toBeUndefined();
  });
});
