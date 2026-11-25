import { InputDefault } from '@/components/InputDefault';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { ButtonDefault } from '@/components/ButtonDefault';
import { Label } from '@/components/Label';
import { colors, spacing } from '@/theme/tokens';

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Pet</Text>

      <InputDefault labelText='Nome do pet' placeholder='Nome do Pet' />

      <Label text='Espécie' />
      <View style={styles.btnSection}>
        <ButtonDefault text='Cão' width='small' />
        <ButtonDefault text='Gato' width='small' />
        <ButtonDefault text='Outro' width='small' />
      </View>

      <InputDefault
        labelText='Microship (opcional)'
        placeholder='Tem Microchip'
      />

      <Link href='/'>Voltar ao início</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
  },
  container: {
    flex: 1,
    padding: spacing.xl,
    backgroundColor: colors.bg,
  },
  btnSection: {
    flexDirection: 'row',
    gap: spacing.xs,
    width: '100%',
  },
});
