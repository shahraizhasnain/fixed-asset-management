import { LogLevel } from '@nestjs/common';

export const loggingLevel = (): LogLevel[] =>
  (process.env.NODE_ENV === 'development'
    ? ['verbose, debug']
    : ['info', 'error', 'warn']) as LogLevel[];
