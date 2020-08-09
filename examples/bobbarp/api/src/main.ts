import {NestFactory} from '@nestjs/core';
import {useContainer} from 'class-validator';
import {ValidationPipe} from '@nestjs/common';
import {SlateModule} from './slate.module';

async function bootstrap() {
  const app = await NestFactory.create(SlateModule);

  useContainer(app.select(SlateModule), {fallbackOnErrors: true});

  app.useGlobalPipes(new ValidationPipe({transform: true}));

  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
