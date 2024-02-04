import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // AppModule is the Root Module
  await app.listen(3000);
}
bootstrap();
