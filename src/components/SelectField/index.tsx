import { colors, fontFamily, radius, sizes, spacing } from '@/theme/tokens';
import { useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type SelectFieldProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export const SelectField = ({ options, onChange, value }: SelectFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemPress = (item: string) => {
    onChange(item);
    setIsOpen(false);
  };
  return (
    <>
      <Pressable style={styles.selectInput} onPress={() => setIsOpen(true)}>
        <Text style={[styles.placeholderText, value && styles.listButtonText]}>
          {value ? value : 'Selecionar'}
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
            data={options}
            keyExtractor={item => item}
            ListEmptyComponent={
              <Text style={styles.textListEmpty}>
                Selecione a espécie primeiro
              </Text>
            }
            renderItem={({ item }) => (
              <Pressable
                style={styles.listButton}
                onPress={() => handleItemPress(item)}
              >
                <Text style={styles.listButtonText}>{item}</Text>
              </Pressable>
            )}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  selectInput: {
    backgroundColor: 'transparent',
    borderColor: colors.surfaceMuted,
    borderWidth: sizes.inputBorderWidth,
    borderRadius: radius.md,
    minHeight: sizes.minTouchTarget,
    alignItems: 'center',
    justifyContent: 'center',
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
