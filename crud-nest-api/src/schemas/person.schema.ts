
import * as mongoose from 'mongoose';
export const PersonSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    profession: String
});