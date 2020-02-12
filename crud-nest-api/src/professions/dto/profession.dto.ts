import { ProfessionInterface } from "../interfaces/profession.interface";

export class ProfessionDto implements ProfessionInterface{
    _id: string;
    text: string;
}
