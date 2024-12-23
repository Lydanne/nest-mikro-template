import { ConsoleLogger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swagger = (app) => {
  const options = new DocumentBuilder()
    .setTitle('Open API')
    .setDescription('Open API description')
    .setVersion('1.0')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'imprint',
      },
      'imprint',
    )
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, documentFactory);
  const port = app.get(ConfigService).get('port');
  const logger = new ConsoleLogger('Swagger');
  logger.log(`Swagger initialized http://127.0.0.1:${port}/swagger`);
};
