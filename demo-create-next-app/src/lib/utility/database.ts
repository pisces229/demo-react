import sql, { Connection } from 'mssql';

console.log('APP_VALUE', process.env.APP_VALUE);

let config = {
  // server: '127.0.0.1',
  // database: 'test',
  // user: 'sa',
  // password: '1qaz!QAZ',
  server: process.env.APP_CONNECTION_HOST!,
  database: process.env.APP_CONNECTION_DBNM!,
  user: process.env.APP_CONNECTION_USER!,
  password: process.env.APP_CONNECTION_MIMA!,
  options: {
    trustServerCertificate: true,
    encrypt: true,
  },
  // parseJSON: true,
  pool: {
    max: 1,
    min: 0,
    idleTimeoutMillis: 10000,
  },
  beforeConnect: (conn: Connection) => {
    conn.once('connect', error => { error ? console.error(error) : console.log('mssql connected')});
    conn.once('end', error => { error ? console.error(error) : console.log('mssql disconnected')});
  },
};

export const connectionPoolPromise = new sql.ConnectionPool(config)
.connect()
.then(value => {
  console.log('Connected to MSSQL');
  return value;
});
