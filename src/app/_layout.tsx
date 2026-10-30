import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';

import { initializeDatabase } from '@/repositories/schema';

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName='petsaude.db' onInit={initializeDatabase}>
      <Stack />
    </SQLiteProvider>
  );
}
