import { StyleSheet, Text } from 'react-native';
import { colors, spacing } from '@/theme/tokens';

type LabelProps = {
  text: string;
};

export const Label = ({ text }: LabelProps) => {
  return <Text style={styles.label}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    color: colors.text,
    padding: spacing.xxs,
    justifyContent: 'flex-start',
  },
});
