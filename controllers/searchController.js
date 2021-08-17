const User = require('../models/User');
const Schedule = require('../models/Schedule');
const Events = require('../models/Events');
const Finance = require('../models/Finance');
const UserClass = require('../models/UserClass');
const WeeklySchedule = require('../models/WeeklySchedule');
const Content = require('../models/Content');
const { 
    searchUserValidate, 
    searchScheduleValidate, 
    searchEventValidate, 
    searchFinanceValidate,
    searchWeeklyScheduleValidate ,
    searchContentValidate
} = require('./validate');

const searchController = {

    simpleSearchStudent: async function (req, res) {

        const {error} = searchUserValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const students = await User.find({idAdmin: req.body.idAdmin, functionUser: {$regex: /student/}});
        if(!students) return res.status(400).send('Nenhum aluno encontrado');

        res.status(200).send(students);
    },

    deepSearchStudent: async function (req, res) {

        const fullName = req.body.fullName;

        const {error} = searchUserValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const students = await User.find({idAdmin: req.body.idAdmin, functionUser: {$regex: /student/}, fullName: {$regex: fullName}});
        if(!students) return res.status(400).send('Nenhum aluno encontrado');

        res.status(200).send(students);
    },

    simpleSearchEmployeer: async function (req, res) {

        const fullName = req.body.fullName;

        const {error} = searchUserValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const students = await User.find({idAdmin: req.body.idAdmin, employeer: true, fullName: {$regex: fullName}});
        if(!students) return res.status(400).send('Nenhum aluno encontrado');

        res.status(200).send(students);
    },

    simpleSearchSchedule: async function (req, res){

        const {error} = searchScheduleValidate(req.body);
        if(error) return res.status(400).send(error.message);

        const scheduleTasks = await Schedule.find({idAdmin: req.body.idAdmin, subject: {$regex: req.body.subject}, series: {$regex: req.body.series}, userClass: {$regex: req.body.userClass}});
        if(!scheduleTasks) return res.status(400).send('Nenhuma tarefa encontrada');
        
        res.status(200).send(scheduleTasks);
    },

    deepSearchSchedule: async function (req, res){

        const {error} = searchScheduleValidate(req.body);
        if(error) return res.status(400).send(error.message);

        const scheduleTasks = await Schedule.find({idAdmin: req.body.idAdmin, subject: {$regex: req.body.subject}, series: {$regex: req.body.series}});
        if(!scheduleTasks) return res.status(400).send('Nenhuma tarefa encontrada');

        res.status(200).send(scheduleTasks);
    },

    simpleSearchEvent: async function (req, res){

        const {error} = searchEventValidate(req.body);
        if(error) return res.status(400).send(error.message);
        
        const events = await Events.find({idAdmin: req.body.idAdmin});
        if(!events) return res.status(400).send('nenhum evento encontrada');
        
        res.status(200).send(events);
    },

    simpleSeachFinance: async function (req, res){

        const {error} = searchFinanceValidate(req.body);
        if(error) return res.status(400).send(error.message);
        
        const events = await Finance.find({idAdmin: req.body.idAdmin});
        if(!events) return res.status(400).send('nenhum evento encontrada');
        
        res.status(200).send(events);
    },

    simpleSearchClass: async function (req, res){

        const {error} = searchScheduleValidate(req.body);
        if(error) return res.status(400).send(error.message);
        
        const userClass = await UserClass.find({idAdmin: req.body.idAdmin});
        if(!userClass) return res.status(400).send('nenhum evento encontrada');
        
        res.status(200).send(userClass);
    },

    deepSearchClass: async function (req, res){

        const {error} = searchScheduleValidate(req.body);
        if(error) return res.status(400).send(error.message);
        
        const userClass = await UserClass.find({idAdmin: req.body.idAdmin, series: req.body.series, userClass: req.body.userClass});
        if(!userClass) return res.status(400).send('nenhuma classe encontrada');
        
        res.status(200).send(userClass);
    },

    simpleSearchWeeklySchedule: async function (req, res){

    const {error} = searchWeeklyScheduleValidate(req.body);
        if(error) return res.status(400).send(error.message);
        
        const weeklySchedule = await WeeklySchedule.find({idAdmin: req.body.idAdmin, series: req.body.series, userClass: req.body.userClass});
        if(!weeklySchedule) return res.status(400).send('nenhum horário encontrada');
        
        res.status(200).send(weeklySchedule);
    },

    simpleSearchContent: async function (req, res){

        const {error} = searchContentValidate(req.body);
        if(error) return res.status(400).send(error.message);
        
        const content = await Content.find({
            idAdmin: req.body.idAdmin,
            idPoster: {$regex: req.body.idPoster ? req.body.idPoster : ''},
            title: {$regex: req.body.title ? req.body.idPoster : ''},
            subject: {$regex: req.body.subject ? req.body.subject : ''},
            series: {$regex: req.body.series ? req.body.series : ''},
            userClass: {$regex: req.body.userClass ? req.body.userClass : ''}
        });
        
        if(!content || content == []) return res.status(400).send('nenhuma classe encontrada');
        
        res.status(200).send(content);
    },
}

module.exports = searchController;