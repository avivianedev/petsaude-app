import { useDatabaseInit } from '@/hooks/useDatabaseInit';
import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function RootLayout() {
  const { ready, error } = useDatabaseInit();

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }
  if (!ready) {
    return null;
  }
  return <Stack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
