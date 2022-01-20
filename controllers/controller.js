import mongoose from "mongoose";
import { UserSchema } from "../models/model";

const User = mongoose.model('User', UserSchema);

export const addNewUser = (req, res) => {
    let newUser = new User(req.body);

    newUser.save((err, user) => {
        if (err) {
            res.send(err)
        }
        res.json(user)
    })
}

export const getAllUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.json(user)
    })
}

export const getUserById = (req, res) => {
    User.findById({
        _id: req.params.userID
    }, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.json(user)
    })
}

export const updateUser = (req, res) => {
    User.findOneAndUpdate({
        _id: req.params.userID
    },
        req.body,
        { new: true, useFindAndModify: false },
        (err, user) => {
    if (err) {
        res.send(err)
    }
    res.json(user)
})
}

export const deleteUser = (req, res) => {
    User.findOneAndDelete({
        _id: req.params.userID
    }, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.send(`Successfully deleted user`)
    })
}