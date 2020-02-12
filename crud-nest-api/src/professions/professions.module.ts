import { Module } from '@nestjs/common';
import { ProfessionsController } from './professions.controller';
import { ProfessionsService } from './professions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessionsSchema } from 'src/schemas/professions.schema';

@Module({
    imports: [MongooseModule.forFeature([{name:'professions',schema : ProfessionsSchema}])],
    controllers: [ProfessionsController],
    providers: [ProfessionsService]
})
export class ProfessionsModule { }
