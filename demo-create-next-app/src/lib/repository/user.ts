import { connectionPoolPromise } from '@/lib/utility/database';

type User = {
  row: string;
  id: string;
  name: string;
  birthday: Date;
  age: number;
};

export const getUser = async () => {
  let result: User | undefined;
  try {
    const connectionPool = await connectionPoolPromise;
    if (connectionPool) {
      try {
        // let transaction = connectionPool.transaction();
        const iresult = await connectionPool.query<User>(`SELECT * FROM [user]`);
        // console.log(iresult);
        // console.log(iresult.recordset);
        // console.log(JSON.stringify(iresult.recordsets));
        result = iresult.recordset[0];
        // await transaction.commit();
        // let transactionBegin = await transaction.begin();
        // await transactionBegin.commit();
        // await transactionBegin.rollback();
      } catch (e) {
        console.error(e);
      }
    }
  } catch (e) {
    console.error(e);
  }
  return result;
};