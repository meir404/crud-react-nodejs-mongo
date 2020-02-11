import { PersonInterface } from "../interfaces/person.interface";

export class PersonDto implements PersonInterface {
    _id: string;
    firstName: string;
    lastName: string;
    age: number;
    profession: string;

}
