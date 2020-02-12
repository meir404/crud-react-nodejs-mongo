import { Controller, Get } from '@nestjs/common';
import { ProfessionsService } from './professions.service';

@Controller('professions')
export class ProfessionsController {
    constructor(private professionService:ProfessionsService) {
       
    }
    @Get()
    async getAll() {
        return await this.professionService.findAll();
    }
}
