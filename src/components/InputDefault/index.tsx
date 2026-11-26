import { colors, fontFamily, radius, sizes, spacing } from '@/theme/tokens';
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
        placeholderTextColor={colors.textDisabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  input: {
    width: '100%',
    borderRadius: radius.md,
    borderWidth: sizes.inputBorderWidth,
    borderColor: colors.surfaceMuted,
    fontFamily: fontFamily.bold,
    color: colors.text,
    paddingHorizontal: spacing.md,
  },

  inputFocused: { borderColor: colors.primary },
});
