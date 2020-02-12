import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessionsModule } from './professions/professions.module';

@Module({
  imports: [
    PersonModule,
    ProfessionsModule,
    MongooseModule.forRoot('mongodb+srv://as:qwe~123@cluster0-r8m6z.azure.mongodb.net/crud-mongo?retryWrites=true&w=majority'),
    ProfessionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
