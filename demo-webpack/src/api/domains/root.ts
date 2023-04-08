import { rest } from 'msw';
import CONFIG from '@/config';

export const handlers = [
  rest.get(`${CONFIG.ENDPOINT}/api/get`, (req, res, ctx) => {
    console.log(req);
    return res(
      ctx.status(200),
      // ctx.json({
      //   success: true,
      //   message: 'handlers',
      //   data: { ok: true },
      // }),
    );
  }),
  rest.post(`${CONFIG.ENDPOINT}/api/post`, (req, res, ctx) => {
    console.log(req);
    return res(
      ctx.status(200),
      // ctx.json({
      //   success: true,
      //   message: 'handlers',
      //   data: { ok: true },
      // }),
    );
  }),
];
