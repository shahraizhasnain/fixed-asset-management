import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { API_GLOBAL_PREFIX } from './constants';
import { loggingLevel, registerOpenApi } from './configs';
import { ConfigService } from '@nestjs/config';
import cors from 'cors';
import { json } from 'express';

export const bootstrapApi = async () => {
  const app = await NestFactory.create(AppModule, { logger: loggingLevel() });
  app.setGlobalPrefix(API_GLOBAL_PREFIX);
  registerOpenApi(app);
  const configService = app.get(ConfigService);
  app.use(cors());
  app.use(json({ limit: configService.get('PAYLOAD_SIZE') }));
  await app.listen(configService.get<number>('PORT'));
};
