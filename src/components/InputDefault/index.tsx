import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, sizes, radius, spacing } from '@/theme/tokens';
import { useState } from 'react';
import { Label } from '../Label';

type InputDefaultProps = {
  labelText: string;
  placeholder: string;
} & React.ComponentProps<typeof TextInput>;

export const InputDefault = ({
  labelText,
  placeholder = '',

  ...props
}: InputDefaultProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Label text={labelText} />
      <TextInput
        cursorColor={colors.primaryDark}
        placeholder={placeholder}
        style={[styles.input, focused && styles.inputFocused]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}

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
