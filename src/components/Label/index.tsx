import { colors, fontFamily, spacing } from '@/theme/tokens';
import { StyleSheet, Text } from 'react-native';

type LabelProps = {
  text: string;
};

export const Label = ({ text }: LabelProps) => {
  return <Text style={styles.label}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    color: colors.textSecondary,
    padding: spacing.xxs,
    justifyContent: 'flex-start',
    fontFamily: fontFamily.black,
  },
});
