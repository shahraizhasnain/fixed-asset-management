import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { API_GLOBAL_PREFIX } from 'src/constants';

const config = new DocumentBuilder()
  .setTitle('Fixed Asset Management')
  .setDescription(process.env.npm_package_description)
  .setVersion(process.env.npm_package_version)
  .build();

export const registerOpenApi = (app: INestApplication) => {
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(API_GLOBAL_PREFIX, app, document);
};
