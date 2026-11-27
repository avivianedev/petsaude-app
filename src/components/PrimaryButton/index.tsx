import { colors, fontFamily, radius, sizes, typography } from '@/theme/tokens';
import { Pressable, StyleSheet, Text } from 'react-native';

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  disable?: boolean;
};

export const PrimaryButton = ({
  disable,
  onPress,
  title,
}: PrimaryButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[style.button, disable && style.buttonDisabled]}
      disabled={disable}
    >
      <Text style={style.textButton}>{title}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: sizes.minTouchTarget,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.lg,
  },
  textButton: {
    ...typography.headingMd,
    color: colors.textOnPrimary,
    fontFamily: fontFamily.black,
    fontSize: 18,
  },
  buttonDisabled: {
    backgroundColor: colors.primaryDark,
    opacity: 0.5,
  },
});
