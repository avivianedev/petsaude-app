import { InputDefault } from '@/components/InputDefault';
import { Label } from '@/components/Label';
import { SegmentedControl } from '@/components/SegmentedControl';
import { SelectField } from '@/components/SelectField';
import breeds from '@/data/breeds.json';
import {
  colors,
  fontFamily,
  radius,
  sizes,
  spacing,
  typography,
} from '@/theme/tokens';
import { DateTimePicker } from '@expo/ui/community/datetime-picker';
import { Link } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Register() {
  const [showPicker, setShowPicker] = useState(false);
  const breedsBySpecies: Record<string, string[]> = breeds;

  const handleSelect = (item: string) => {
    setForm({ ...form, breed: item });
  };

  const [form, setForm] = useState({
    name: '',
    species: '',
    sex: '',
    microchip: '',
    breed: '',
    birthDate: '',
    weight: '',
    otherSpecies: '',
    neutered: '',
    coat: '',
  });

  const breedOptions = breedsBySpecies[form.species] ?? [];

  return (
    <KeyboardAvoidingView style={styles.screen} behavior='padding'>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps='handled'
      >
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
          onChange={text =>
            setForm({ ...form, species: text, breed: '', otherSpecies: '' })
          }
          value={form.species}
        />

        {form.species === 'Outro' && (
          <>
            <Label text='Outras espécies' />
            <InputDefault
              placeholder='Digite a espécie'
              value={form.otherSpecies}
              onChangeText={text => setForm({ ...form, otherSpecies: text })}
            />
          </>
        )}

        <View style={styles.fieldRow}>
          <View style={styles.fieldColumn}>
            <Label text='Sexo' />
            <SegmentedControl
              options={['Macho', 'Fêmea']}
              onChange={text => setForm({ ...form, sex: text })}
              value={form.sex}
            />
          </View>

          <View style={styles.fieldColumn}>
            <Label text='Nascimento' />
            <Pressable
              style={styles.dateInput}
              onPress={() => setShowPicker(true)}
            >
              <Text style={styles.textDateInput}>
                {form.birthDate ? form.birthDate : 'Selecionar data'}
              </Text>
            </Pressable>
            {showPicker && (
              <DateTimePicker
                value={form.birthDate ? new Date(form.birthDate) : new Date()}
                mode='date'
                presentation='dialog'
                maximumDate={new Date()}
                onValueChange={(event, selectedDate) => {
                  setShowPicker(false);
                  setForm({
                    ...form,
                    birthDate: selectedDate.toISOString().slice(0, 10),
                  });
                }}
                onDismiss={() => setShowPicker(false)}
              />
            )}
          </View>
        </View>
        <View style={styles.fieldRow}>
          <View style={styles.fieldColumn}>
            <Label text='Raça' />
            {form.species === 'Outro' ? (
              <InputDefault
                placeholder='Digite a raça'
                value={form.breed}
                onChangeText={text => setForm({ ...form, breed: text })}
              />
            ) : (
              <SelectField
                onChange={handleSelect}
                options={breedOptions}
                value={form.breed}
              />
            )}
          </View>

          <View style={styles.fieldColumn}>
            <Label text='Peso' />
            <InputDefault
              placeholder='0,0'
              value={form.weight}
              onChangeText={text => setForm({ ...form, weight: text })}
              keyboardType='decimal-pad'
            />
          </View>
        </View>

        <Label text='Microchip' />
        <InputDefault
          placeholder='Somente números'
          value={form.microchip}
          onChangeText={text => setForm({ ...form, microchip: text })}
          keyboardType='number-pad'
        />

        <Label text='Castrado(a)' />
        <SegmentedControl
          options={['SIM', 'NÃO']}
          onChange={text => {
            setForm({ ...form, neutered: text });
          }}
          value={form.neutered}
        />

        <Label text='Pelagem' />
        <InputDefault
          placeholder=''
          value={form.coat}
          onChangeText={text => setForm({ ...form, coat: text })}
        />

        <Link href='/'>Voltar ao início</Link>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  title: {
    ...typography.displayMd,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  fieldRow: {
    flexDirection: 'row',
    width: '100%',
    gap: spacing.xs,
  },
  fieldColumn: {
    width: '50%',
  },
  dateInput: {
    backgroundColor: 'transparent',
    borderColor: colors.surfaceMuted,
    borderWidth: sizes.inputBorderWidth,
    borderRadius: radius.md,
    minHeight: sizes.minTouchTarget,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDateInput: {
    color: colors.text,
    fontFamily: fontFamily.bold,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    padding: spacing.lg,
    paddingVertical: spacing.xxl,
  },
});
