// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { defaultMiddleware } from '../../lib/utility/middleware';

export type Method =
  |'GET'
  |'DELETE'
  |'HEAD'
  |'OPTIONS'
  |'POST'
  |'PUT'
  |'PATCH'
  |'PURGE'
  |'LINK'
  |'UNLINK';

type Data = {
  method: string
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let result: Data = { method: req.method! };
  defaultMiddleware(req, res, () => {
    switch (req.method) {
      case 'GET':{
        res.status(200).json(result);
        break;
      }
      case 'POST':{
        res.status(200).json(result);
        break;
      }
      default: {
        res.status(404).json(result);
        break;
      }
    }
  });
}