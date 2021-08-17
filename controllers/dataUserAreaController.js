const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const loginValidate = require('../controllers/userController');

const dataUserAreaController = {
    firstName: async function (req, res) {

        const token = req.body.token;
        const userData = jwt.decode(token);
        
        if (!userData) return res.status(401).send('user desloged')
        const id = userData._id
        const admin = userData.admin;

        const selectedUser = await User.findOne({ _id: id });
        if (!selectedUser) return res.status(401).send('user dosent exist')

        res.send(selectedUser);
    }
}

module.exports = dataUserAreaController;