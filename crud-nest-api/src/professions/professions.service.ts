import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProfessionInterface } from './interfaces/profession.interface';
import { ProfessionDto } from './dto/profession.dto';

@Injectable()
export class ProfessionsService {
  
    constructor(@InjectModel('professions') private readonly professionsModel: Model<ProfessionInterface>) {    }

    async findAll(): Promise<ProfessionDto[]> {
        return this.professionsModel.find();
    }
}
