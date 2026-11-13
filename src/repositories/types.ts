import type { SQLiteBindValue, SQLiteRunResult } from 'expo-sqlite';

export interface Database {
  execAsync(sql: string): Promise<void>;
  runAsync(sql: string, params: SQLiteBindValue[]): Promise<SQLiteRunResult>;
  getFirstAsync<T>(sql: string, params: SQLiteBindValue[]): Promise<T | null>;
  getAllAsync<T>(sql: string, params: SQLiteBindValue[]): Promise<T[]>;
}
