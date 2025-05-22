"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const backend_module_1 = require("./backend.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    var _a;
    const app = await core_1.NestFactory.create(backend_module_1.BackendModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('LERNA')
        .setDescription('Personal Project')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen((_a = process.env.port) !== null && _a !== void 0 ? _a : 4000);
}
bootstrap();
