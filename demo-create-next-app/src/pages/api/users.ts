// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string;
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(`NextApiRequest.Method:[${req.method}]`);
  res.status(200).json({ id: '1', name: 'John Doe' });
}
