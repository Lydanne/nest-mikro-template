import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default (app) => {
  const options = new DocumentBuilder()
    .setTitle('Hello example')
    .setDescription('The hello API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
};
