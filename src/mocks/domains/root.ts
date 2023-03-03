import { rest } from 'msw';
import { BASE_URL } from '../../demo-ajax/demo-ajax-const';

let count = 0;

export const handlers = [
  rest.get(`${BASE_URL}/`, (req, res, ctx) => {
    console.log(req);
    ++count;
    return res(
      ctx.status(200),
      ctx.text('handlers' + count),
      // ctx.json({
      //   success: true,
      //   message: 'handlers',
      //   data: { ok: true },
      // }),
    );
  }),
];
