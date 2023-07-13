// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getUser } from '@/lib/repository/user';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(await getUser());
}
