import { colors, radius, sizes, spacing } from '@/theme/tokens';
import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type InputDefaultProps = {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
} & React.ComponentProps<typeof TextInput>;

export const InputDefault = ({
  placeholder,
  value,
  onChangeText,

  ...props
}: InputDefaultProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        cursorColor={colors.primaryDark}
        placeholder={placeholder}
        style={[styles.input, focused && styles.inputFocused]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%' },
  label: { color: colors.text, padding: spacing.xxs },
  input: {
    width: '100%',
    borderRadius: radius.md,
    borderWidth: sizes.inputBorderWidth,
    borderColor: colors.surfaceMuted,
  },

  inputFocused: { borderColor: colors.primary },
});
