import { Module } from '@nestjs/common';
import { AppService } from './service/app.service';
import { AppController } from './controller/app.controller';
import { ConfigModule } from '@nestjs/config';

const commonModules = [ConfigModule.forRoot()];
const customModules = [];
const appImports = commonModules.concat(customModules);
@Module({
  imports: appImports,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
