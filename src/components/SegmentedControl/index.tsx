import { colors, fontFamily, radius, sizes, spacing } from '@/theme/tokens';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type SegmentedControlProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
} & React.ComponentProps<typeof Pressable>;

export const SegmentedControl = ({
  options,
  onChange,
  value,
}: SegmentedControlProps) => {
  return (
    <View style={styles.container}>
      {options.map(e => (
        <Pressable
          style={[styles.btn, value === e && styles.btnSelected]}
          onPress={() => onChange(e)}
          key={e}
        >
          <Text
            style={[
              styles.description,
              value === e && styles.selectedDescription,
            ]}
          >
            {e}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', width: '100%', gap: spacing.xs },
  btn: {
    borderWidth: 1.5,
    borderColor: colors.surfaceMuted,
    minHeight: sizes.minTouchTarget,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: radius.md,
  },
  btnSelected: {
    backgroundColor: colors.primary,
  },
  description: { color: colors.textDisabled, fontFamily: fontFamily.bold },
  selectedDescription: { color: colors.textOnPrimary },
});
