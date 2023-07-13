import sql, { Connection } from 'mssql';

// https://tediousjs.github.io/node-mssql/

let config = {
  user: 'sa',
  password: '1qaz!QAZ',
  server: '127.0.0.1',
  database: 'test',
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
