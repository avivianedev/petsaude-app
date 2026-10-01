import * as SQLite from 'expo-sqlite';
let db: Promise<SQLite.SQLiteDatabase> | null = null;
const DATABASE_NAME = 'petsaude.db';

export const getDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  if (db) {
    return db;
  }

  db = SQLite.openDatabaseAsync(DATABASE_NAME).catch(error => {
    db = null;
    throw new Error('Não foi possível carregar seus dados offline.', {
      cause: error,
    });
  });

  return db;
};

export const closeDatabase = async (): Promise<void> => {
  if (db) {
    const connection = await db;
    await connection.closeAsync();
    db = null;
  }
};
