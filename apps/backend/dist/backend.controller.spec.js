"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const backend_controller_1 = require("./backend.controller");
const backend_service_1 = require("./backend.service");
describe('BackendController', () => {
    let backendController;
    beforeEach(async () => {
        const app = await testing_1.Test.createTestingModule({
            controllers: [backend_controller_1.BackendController],
            providers: [backend_service_1.BackendService],
        }).compile();
        backendController = app.get(backend_controller_1.BackendController);
    });
    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(backendController.getHello()).toBe('Hello World!');
        });
    });
});
//# sourceMappingURL=backend.controller.spec.js.map