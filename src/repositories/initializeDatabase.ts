import { getDatabase } from './database';
import { createTables } from './schema';

export const initializeDatabase = async (): Promise<void> => {
  const db = await getDatabase();
  await createTables(db);
};
