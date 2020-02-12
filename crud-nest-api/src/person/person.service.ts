import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PersonDto } from './dto/person.dto';
import { PersonInterface } from './interfaces/person.interface';
const ObjectId = require('mongoose').Types.ObjectId;


@Injectable()
export class PersonService {
    constructor(@InjectModel('persons') private readonly personModel: Model<PersonInterface>) { }

    async create(personDto: PersonDto): Promise<PersonInterface> {
        const createdPerson = new this.personModel(personDto);
        return createdPerson.save();
    }

    async findAll(): Promise<PersonInterface[]> {
        return this.personModel.find();
    }
    async remove(_id: string): Promise<any> {
        return this.personModel.find({ _id: new ObjectId(_id) }).remove().exec();
    }
    async update(_id: string, object: PersonDto): Promise<any> {
        return this.personModel.update({ _id: new ObjectId(_id) }, object).exec();
    }
}
