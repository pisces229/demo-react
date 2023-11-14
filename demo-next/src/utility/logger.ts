import { createLogger, format, transports } from 'winston';
import { LoggingWinston } from '@google-cloud/logging-winston';
import { serverRuntimeConfig } from '@/config';

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [new transports.Console()],
});

if (serverRuntimeConfig.GCP_PROJECT_ID) {
  logger.add(new LoggingWinston({
    projectId: serverRuntimeConfig.GCP_PROJECT_ID!,
    keyFilename: serverRuntimeConfig.GOOGLE_APPLICATION_CREDENTIALS!,
    resource: {
      type: 'global',
    },
    logName: 'DemoMalDev.Public',
  }));
}

export { logger };