/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const options = new DocumentBuilder()
    .setTitle('Advania Chat server')
    .setDescription('Server to manage chat sessions.')
    .setVersion('1.0')
    .addTag('vochat')
    .setBasePath(globalPrefix)
    .build();


  const document = SwaggerModule.createDocument(app, options);
  
  SwaggerModule.setup('swagger', app, document);


  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    const str = `
    Server listening at these locations:
     - http://localhost:${port}/${globalPrefix}
     - http://localhost:${port}/swagger
     - http://localhost:${port}/graphql
    `;

    Logger.log(str);
  });
}

bootstrap();
