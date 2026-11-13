import initSqlJs, { type SqlValue } from 'sql.js';
import type { SQLiteBindValue } from 'expo-sqlite';

import type { Database } from '@/repositories/types';

export type TestDatabase = Database & { closeAsync(): Promise<void> };

export const createTestDatabase = async (): Promise<TestDatabase> => {
  const SQL = await initSqlJs();
  const sqlite = new SQL.Database();

  return {
    execAsync: async (sql: string) => {
      sqlite.exec(sql);
    },
    runAsync: async (sql: string, params: SQLiteBindValue[]) => {
      sqlite.run(sql, params as SqlValue[]);
      const result = sqlite.exec('SELECT last_insert_rowid()');
      return {
        lastInsertRowId: Number(result[0].values[0][0]),
        changes: sqlite.getRowsModified(),
      };
    },
    getFirstAsync: async <T>(sql: string, params: SQLiteBindValue[]) => {
      const statement = sqlite.prepare(sql);
      statement.bind(params as SqlValue[]);
      const row = statement.step() ? (statement.getAsObject() as T) : null;
      statement.free();
      return row;
    },
    getAllAsync: async <T>(sql: string, params: SQLiteBindValue[]) => {
      const statement = sqlite.prepare(sql);
      statement.bind(params as SqlValue[]);
      const rows: T[] = [];
      while (statement.step()) {
        rows.push(statement.getAsObject() as T);
      }
      statement.free();
      return rows;
    },
    closeAsync: async () => {
      sqlite.close();
    },
  };
};
