import { logger } from '@/utility/logger';
import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest, next: () => Promise<NextResponse>) => {
  // This logic is only applied to /api
  logger.info(request.url);
  logger.debug('middleware...');
  logger.debug(request.referrer);
  let cookies = request.cookies;
  logger.debug(cookies);

  if (request.referrer === undefined) {
    return NextResponse.json('Forbidden', { status: 403 });
  }

  const response = await next();
  // next(response);
  response.cookies.set('api', 'api');
  response.cookies.set('Path', '/');
  response.cookies.set('SameSite', 'Strict');
  logger.debug('...middleware');
  return response;
};
