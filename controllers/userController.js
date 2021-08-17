const User = require("../models/User");
const Employeer = require("../models/Employeer");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { loginValidate, registerStudentValidate, registerEmployeerValidate, deleteUserValidate, updateStudentValidate, updateEmployeerValidate } = require('./validate');

const userController = {

    login: async function (req, res) {

        const { error } = loginValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const selectedUser = await User.findOne({ email: req.body.email });
        if (!selectedUser) return res.status(400).send('email do not exist');

        const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password);
        if (!passwordAndUserMatch) {
            return res.status(400).send('password incorrect');
        } else {
            const token = jwt.sign({ _id: selectedUser._id, admin: selectedUser.admin }, process.env.TOKEN_SECRET);

            res.header('authorization-token', token);
            res.send([token]);
        }
    },

    registerStudent: async function (req, res) {

        const { error } = registerStudentValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const selectedUser = await User.findOne({ email: req.body.email });
        if (selectedUser) return res.status(409).send("email already exist");

        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            fullName: req.body.fullName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            phone: req.body.phone,
            schoolName: req.body.schoolName,
            series: req.body.series,
            userClass: req.body.userClass,
            birthDate: req.body.birthDate,
            functionUser: req.body.functionUser,
            idAdmin: req.body.idAdmin
        });

        try {
            const savedUser = await user.save()
            res.send(savedUser);
        } catch (error) {
            res.status(400).send(error)
        }
    },

    registerEmployeer: async function (req, res) {

        const { error } = registerEmployeerValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const selectedUser = await User.findOne({ email: req.body.email });
        if (selectedUser) return res.status(409).send("email already exist");

        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            fullName: req.body.fullName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            phone: req.body.phone,
            schoolName: req.body.schoolName,
            birthDate: req.body.birthDate,
            functionUser: req.body.functionUser,
            idAdmin: req.body.idAdmin,
            subject: req.body.subject,
            employeer: req.body.employeer
        });

        try {
            const savedUser = await user.save()
            res.send(savedUser);
        } catch (error) {
            res.status(400).send(error)
        }
    },

    editStudent: async function (req, res) {

        const { error } = updateStudentValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const selecteduser = await User.updateOne({ _id: req.body._id }, {
            $set: req.body.password != '' ? {
                lastName: req.body.lastName,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password),
                series: req.body.series,
                userClass: req.body.userClass,
                firstName: req.body.firstName,
                fullName: req.body.fullName,
                phone: req.body.phone,
                birthDate: req.body.birthDate
            } : {
                lastName: req.body.lastName,
                email: req.body.email,
                series: req.body.series,
                userClass: req.body.userClass,
                firstName: req.body.firstName,
                fullName: req.body.fullName,
                phone: req.body.phone,
                birthDate: req.body.birthDate
            }
        })
        if(!selecteduser) return res.status(400).send('Erro ao editar aluno');

        res.send(selecteduser);
    },

    editEmployeer:async function (req, res) {

        const { error } = updateEmployeerValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const selecteduser = await User.updateOne({ _id: req.body._id }, {
            $set: req.body.password != '' ? {
                lastName: req.body.lastName,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password),
                series: req.body.series,
                userClass: req.body.userClass,
                firstName: req.body.firstName,
                fullName: req.body.fullName,
                phone: req.body.phone,
                birthDate: req.body.birthDate,
                subject: req.body.subject,
                functionUser: req.body.functionUser
            } : {
                lastName: req.body.lastName,
                email: req.body.email,
                series: req.body.series,
                userClass: req.body.userClass,
                firstName: req.body.firstName,
                fullName: req.body.fullName,
                phone: req.body.phone,
                birthDate: req.body.birthDate,
                subject: req.body.subject,
                functionUser: req.body.functionUser
            }
        })
        if(!selecteduser) return res.status(400).send('Erro ao editar aluno');

        res.send(selecteduser);
    },



    deleteUser: async function (req, res) {

        const { error } = deleteUserValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const selectedUser = await User.remove({ _id: req.body._id });
        if (!selectedUser) return res.status(400).send('user not found');

        res.send(selectedUser);
    }
}
module.exports = userController