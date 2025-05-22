import { NestFactory } from '@nestjs/core';
import { BackendModule } from './backend.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(BackendModule);

  const config = new DocumentBuilder()
  .setTitle('LERNA')
  .setDescription('Personal Project')
  .setVersion('1.0')
  .addBearerAuth()
  .build()

  const document =SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.port ?? 4000);
}
bootstrap();
