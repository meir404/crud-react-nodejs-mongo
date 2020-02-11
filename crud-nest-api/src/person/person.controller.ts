import { Controller, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { PersonDto } from './dto/person.dto';

@Controller('persons')
export class PersonController {

    @Post()
    create(@Body() createPersonDto: PersonDto) {
        console.log(createPersonDto)
        createPersonDto._id = '123';
        return <PersonDto[]>[createPersonDto];
    }

    @Get()
    findAll(@Query() query: string) {
        return <PersonDto[]>[{ _id: "13", firstName: "meir", lastName: "lastName", age: 12, profession: "1232" }];
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return <PersonDto>{ _id: "13", firstName: "meir", lastName: "lastName", age: 12, profession: "1232" }
    }

    @Put()
    update(@Body() updatePersonDto: PersonDto) {
        console.log(updatePersonDto)
        return { ok: true };
    }

    @Delete()
    remove(@Query('id') _id: string) {
        console.log(_id)
        return { ok: true };
    }
}
