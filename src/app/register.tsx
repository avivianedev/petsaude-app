import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Register() {
  return (
    <View style={styles.container}>
      <Text>Cadastro de Pet</Text>
      <Link href='/'>Voltar ao início</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
