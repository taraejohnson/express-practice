import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'true'
    },
    pronouns: {
        type: String
    },
    birthDate: {
        type: Number,
        required: 'true'
    },
    birthPlace: {
        type: String,
        required: 'true'
    },
    birthTime: {
        type: Number,
        required: 'true'
    }
});