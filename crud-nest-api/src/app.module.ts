import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonService } from './person/person.service';
import { PersonController } from './person/person.controller';
import { PersonModule } from './person/person.module';
import { ProfessionsController } from './professions/professions.controller';
import { ProfessionsService } from './professions/professions.service';

@Module({
  imports: [PersonModule],
  controllers: [AppController, ProfessionsController],
  providers: [AppService, ProfessionsService],
})
export class AppModule { }
