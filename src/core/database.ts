import { connect } from 'mssql';
import type { config } from 'mssql';
import { env } from 'process';

export async function createPoolConnection() {
  const sqlConfig: config = {
    server: env.SQL_SERVER!,
    user: env.SQL_USER!,
    password: env.SQL_PASSWORD!,
    database: env.SQL_DATABASE!,
    options: { encrypt: false },
  };

  try {
    return await connect(sqlConfig);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}
