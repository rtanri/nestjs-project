import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Decorators @ encapsulate all important to this module's context
@Module({
  imports: [],
  controllers: [AppController], // include controllers from CLI starter
  providers: [AppService], // include providers from CLI starter
})
export class AppModule { }
