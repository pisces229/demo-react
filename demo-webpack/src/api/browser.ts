import { setupWorker } from 'msw';
import { handlers } from '@appSrc/api/handlers';

export const worker = setupWorker(...handlers);
