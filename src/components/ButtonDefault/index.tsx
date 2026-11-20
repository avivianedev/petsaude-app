import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, sizes, radius, spacing } from '@/theme/tokens';

type ButtonDefaultProps = {
  width: 'small' | 'medium' | 'large';
  text: 'Cão' | 'Gato' | 'Outro';
  image?: '';
} & React.ComponentProps<typeof Pressable>;

export const ButtonDefault = ({
  width = 'medium',
  text,
}: ButtonDefaultProps) => {
  return (
    <Pressable style={[styles.btnContainer, styles[width]]}>
      <Text>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    borderWidth: 0.5,
    borderColor: colors.primary,
    padding: spacing.xxs,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 38,
    borderRadius: spacing.md,
  },
  medium: {
    width: 'auto',
  },
  small: {
    width: 'auto',
  },
  large: {
    width: 'auto',
  },
  selected: { backgroundColor: colors.primary },
});
