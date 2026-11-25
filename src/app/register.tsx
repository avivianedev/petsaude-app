import { InputDefault } from '@/components/InputDefault';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Label } from '@/components/Label';
import { SegmentedControl } from '@/components/SegmentedControl';
import { colors, spacing, typography } from '@/theme/tokens';
import { useState } from 'react';

export default function Register() {
  const [species, setSpecies] = useState('Cão');
  const [sex, setSex] = useState('Macho');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Pet</Text>

      <Label text='Nome do pet' />
      <InputDefault placeholder='Nome do Pet' />

      <Label text='Espécie' />
      <SegmentedControl
        options={['Cão', 'Gato', 'Outro']}
        onChange={setSpecies}
        value={species}
      />

      <Label text='Sexo' />
      <SegmentedControl
        options={['Macho', 'Fêmea']}
        onChange={setSex}
        value={sex}
      />

      <Label text='Microchip' />
      <InputDefault placeholder='Tem Microchip' />

      <Link href='/'>Voltar ao início</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    ...typography.displayMd,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    margin: spacing.lg,
    backgroundColor: colors.bg,
    paddingVertical: spacing.xxl,
  },
});
