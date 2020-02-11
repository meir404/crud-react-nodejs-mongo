import { Controller, Get } from '@nestjs/common';

@Controller('professions')
export class ProfessionsController {
    @Get()
    getAll() {
        return [{ _id: "1232", text: "per" }];
    }
}
