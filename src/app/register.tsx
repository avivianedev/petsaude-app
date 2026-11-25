import { InputDefault } from '@/components/InputDefault';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Label } from '@/components/Label';
import { SegmentedControl } from '@/components/SegmentedControl';
import { colors, spacing, typography } from '@/theme/tokens';
import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    species: '',
    sex: '',
    microchip: '',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Pet</Text>

      <Label text='Nome do pet' />
      <InputDefault
        placeholder='Nome do Pet'
        value={form.name}
        onChangeText={text => setForm({ ...form, name: text })}
      />

      <Label text='Espécie' />
      <SegmentedControl
        options={['Cão', 'Gato', 'Outro']}
        onChange={text => setForm({ ...form, species: text })}
        value={form.species}
      />

      <Label text='Sexo' />
      <SegmentedControl
        options={['Macho', 'Fêmea']}
        onChange={text => setForm({ ...form, sex: text })}
        value={form.sex}
      />

      <Label text='Microchip' />
      <InputDefault
        placeholder='Tem Microchip'
        value={form.microchip}
        onChangeText={text => setForm({ ...form, microchip: text })}
      />

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
