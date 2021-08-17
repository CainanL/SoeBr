const Schedule = require('../models/Schedule');
const Events = require('../models/Events');
const Messeger = require('../models/Messeger');
const Finance = require('../models/Finance');
const UserClass = require('../models/UserClass');
const WeeklySchedule = require('../models/WeeklySchedule');
const Content = require('../models/Content');

const {
    registrationScheduleValidate,
    registerEventsValidate,
    registerMessegerValidate,
    registerFinanceValidate,
    registerClassValidate,
    registerWeeklyScheduleValidate,
    registerContentValidate
} = require('./validate');

const registrationController = {

    registerSchedule: async function (req, res) {

        const { error } = registrationScheduleValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const schedule = new Schedule({
            series: req.body.series,
            userClass: req.body.userClass,
            idAdmin: req.body.idAdmin,
            idPoster: req.body.idPoster,
            schoolName: req.body.schoolName,
            subject: req.body.subject,
            poster: req.body.poster,
            title: req.body.title,
            notice: req.body.notice
        })

        try {
            const savedSchedule = await schedule.save()
            res.send(savedSchedule);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    registerEvent: async function (req, res) {

        const { error } = registerEventsValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const events = new Events({
            idAdmin: req.body.idAdmin,
            idPoster: req.body.idAdmin,
            schoolName: req.body.schoolName,
            poster: req.body.poster,
            title: req.body.title,
            notice: req.body.notice
        })

        try {
            const savedEvents = await events.save()
            res.send(savedEvents);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    registerMesseger: async function (req, res) {

        const { error } = registerMessegerValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const messeger = new Messeger(req.body.subject ? {
            fullNamePoster: req.body.fullNamePoster,
            functionPoster: req.body.functionPoster,
            idPoster: req.body.idPoster,
            idReceiver: req.body.idReceiver,
            subject: req.body.subject
        } : {
            fullNamePoster: req.body.fullNamePoster,
            functionPoster: req.body.functionPoster,
            idPoster: req.body.idPoster,
            idReceiver: req.body.idReceiver
        })

        try {
            const savedMesseger = await messeger.save()
            res.send(savedMesseger);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    registerFinance: async function (req, res) {

        const { error } = registerFinanceValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const finance = new Finance({
            description: req.body.description,
            idAdmin: req.body.idAdmin,
            fullName: req.body.fullName,
            value: req.body.value,
            inOut: req.body.inOut
        })

        try {
            const savedFinance = await finance.save()
            res.send(savedFinance);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    registerClass: async function (req, res) {

        const { error } = registerClassValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const duplicateValidate = await UserClass.find({ idAdmin: req.body.idAdmin, series: req.body.series, userClass: req.body.userClass });
        if (duplicateValidate.length > 0) return res.status(409).send('class allready exist');



        const userClass = new UserClass({
            idAdmin: req.body.idAdmin,
            series: req.body.series,
            userClass: req.body.userClass,
            schoolName: req.body.schoolName,
        })

        try {
            const savedUserClass = await userClass.save()
            res.send(savedUserClass);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    registerWeeklySchedule: async function (req, res) {

        const { error } = registerWeeklyScheduleValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const weekleSchedule = await WeeklySchedule.updateOne({ idAdmin: req.body.idAdmin, day: req.body.day, series: req.body.series, userClass: req.body.userClass }, {
            idAdmin: req.body.idAdmin,
            day: req.body.day,
            weeklySchedule: req.body.weeklySchedule,
            series: req.body.series,
            userClass: req.body.userClass
        }, { upsert: true });

        if (!weekleSchedule) return res.status(400).send('Erro ao editar aluno');

        res.send(weekleSchedule);
    },

    registerContent: async function (req, res) {

        const { error } = registerContentValidate(req.body);
        if (error) return res.status(400).send(error.message);

        const content = new Content({
            idAdmin: req.body.idAdmin,
            idPoster: req.body.idPoster,
            title: req.body.title,
            text: req.body.text,
            urlVideo: req.body.urlVideo,
            urlAbout: req.body.urlAbout,
            posterName: req.body.posterName,
            subject: req.body.subject,
            userClass: req.body.userClass,
            series: req.body.series
        })

        try {
            const savedContent = await content.save()
            res.send(savedContent);
        } catch (error) {
            res.status(400).send(error);
        }
    },
}

module.exports = registrationController;