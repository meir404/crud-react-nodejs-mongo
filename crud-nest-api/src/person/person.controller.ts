import { Controller, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { PersonDto } from './dto/person.dto';
import { PersonService } from './person.service';

@Controller('persons')
export class PersonController {
    constructor(private personService: PersonService) { }

    @Post()
    create(@Body() createPersonDto: PersonDto) {
        return this.personService.create(createPersonDto);
    }

    @Get()
    async findAll() {
        return await this.personService.findAll();
    }

    @Put()
    update(@Body() updatePersonDto: PersonDto) {
        const _id = updatePersonDto._id;
        delete updatePersonDto._id;
        return this.personService.update(_id,updatePersonDto);
    }

    @Delete()
    remove(@Query('id') _id: string) {
        return this.personService.remove(_id);
    }
}
