import { InputDefault } from '@/components/InputDefault';
import breeds from '@/data/breeds.json';
import { Link } from 'expo-router';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Label } from '@/components/Label';
import { SegmentedControl } from '@/components/SegmentedControl';
import {
  colors,
  fontFamily,
  radius,
  sizes,
  spacing,
  typography,
} from '@/theme/tokens';
import { useState } from 'react';

import { DateTimePicker } from '@expo/ui/community/datetime-picker';

export default function Register() {
  const [showPicker, setShowPicker] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const breedsBySpecies: Record<string, string[]> = breeds;

  const handleSelect = (item: string) => {
    setIsOpen(false);
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
  });

  const breedOptions = breedsBySpecies[form.species] ?? [];
  console.log(form);
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
          <Pressable style={styles.dateInput} onPress={() => setIsOpen(true)}>
            <Text
              style={[
                styles.placeholderText,
                form.breed && styles.listButtonText,
              ]}
            >
              {form.breed ? form.breed : 'Selecionar'}
            </Text>
          </Pressable>

          <Modal
            visible={isOpen}
            animationType='slide'
            onRequestClose={() => setIsOpen(false)}
          >
            <View style={styles.modalContent}>
              <Pressable
                style={styles.closeButton}
                onPress={() => setIsOpen(false)}
              >
                <Text style={styles.closeButtonText}>X</Text>
              </Pressable>
              <FlatList
                data={breedOptions}
                keyExtractor={item => item}
                ListEmptyComponent={
                  <Text style={styles.textListEmpty}>
                    Selecione a espécie primeiro
                  </Text>
                }
                renderItem={({ item }) => (
                  <Pressable
                    style={styles.listButton}
                    onPress={() => handleSelect(item)}
                  >
                    <Text style={styles.listButtonText}>{item}</Text>
                  </Pressable>
                )}
              />
            </View>
          </Modal>
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
  modalContent: {
    flex: 1,
    padding: spacing.lg,
    paddingTop: spacing.xxl,
  },
  closeButton: {
    minHeight: sizes.minTouchTarget,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '12%',
    borderRadius: radius.full,
  },
  closeButtonText: {
    fontFamily: fontFamily.extraBold,
    color: colors.textOnPrimary,
  },
  listButtonText: {
    color: colors.text,
    fontFamily: fontFamily.bold,
  },
  listButton: {
    paddingHorizontal: spacing.md,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: spacing.md,
    minHeight: sizes.minTouchTarget,
  },
  textListEmpty: {
    color: colors.textSecondary,
    fontFamily: fontFamily.bold,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    width: '100%',
    color: colors.textDisabled,
    fontFamily: fontFamily.bold,
    textAlign: 'left',
    paddingHorizontal: spacing.md,
  },
});
