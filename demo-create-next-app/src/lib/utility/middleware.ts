import { NextApiRequest, NextApiResponse } from "next";

export const defaultMiddleware = (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
  console.log('middleware...');
  console.log(req.headers.referer);
  let cookies = req.cookies;
  console.log(cookies);
  if (req.headers.referer === undefined) {
    // res.status(403);
    res.status(403).send('Forbidden');
  } else {
    // res.setHeader('Set-Cookie', 'cookieName=cookieValue; Path=/; HttpOnly; Max-Age=3600; SameSite=Strict');
    res.setHeader('Set-Cookie', 'api=api; Path=/; SameSite=Strict;');
    next();
  }
  console.log('...middleware');
};