const { allow } = require('@hapi/joi');
const joi = require('@hapi/joi');

//login
const loginValidate = (data) => {

    const schema = joi.object({
        email: joi.string().required().min(6).max(200),
        password: joi.string().required().min(8).max(30)
    })

    return schema.validate(data);
}

//register
const registerStudentValidate = (data) => {

    console.log("aqui 1")

    const schema = joi.object({
        lastName: joi.string().required().min(3).max(50),
        email: joi.string().required().min(5).max(150),
        password: joi.string().required().min(6).max(20),
        series: joi.string().required().min(1).max(2),
        userClass: joi.string().required().min(1).max(2),
        firstName: joi.string().required().min(3).max(50),
        fullName: joi.string().required().min(3).max(200),
        phone: joi.string().min(8).max(16),
        birthDate: joi.string().required().min(1).max(99),
        functionUser: joi.string().required().min(3).max(20),
        schoolName: joi.string().required().min(3).max(110),
        idAdmin: joi.string().required().min(1).max(200)
    });
    console.log(schema.validate(data))

    return schema.validate(data);
}

const registerEmployeerValidate = (data) => {

    console.log("aqui 1")

    const schema = joi.object({
        subject: joi.string().allow('').max(100),
        fullName: joi.string().required().min(3).max(250),
        email: joi.string().required().min(5).max(150),
        password: joi.string().required().min(6).max(20),
        firstName: joi.string().required().min(3).max(50),
        lastName: joi.string().required().min(3).max(200),
        phone: joi.string().max(16),
        birthDate: joi.string().required().min(1).max(99),
        functionUser: joi.string().required().min(3).max(20),
        schoolName: joi.string().required().min(3).max(110),
        idAdmin: joi.string().required().min(1).max(200),
        admin: joi.boolean(),
        employeer: joi.boolean()
    });
    console.log(schema.validate(data))

    return schema.validate(data);
}

const registrationScheduleValidate = (data) => {
    const schema = joi.object({
        series: joi.string().required(),
        userClass: joi.string().required(),
        idAdmin: joi.string().required().min(2).max(600),
        idPoster: joi.string().required().min(2).max(600),
        schoolName: joi.string().required().min(2).max(100),
        subject: joi.string().required().min(2).max(50),
        poster: joi.string().required().min(2).max(50),
        title: joi.string().required().min(2).max(50),
        notice: joi.string().required().min(2)
    })
    return schema.validate(data);
}

const registerEventsValidate = (data) => {
    const schema = joi.object({
        idAdmin: joi.string().required().min(2).max(600),
        idPoster: joi.string().required().min(2).max(600),
        schoolName: joi.string().required().min(2).max(100),
        poster: joi.string().required().min(2).max(50),
        title: joi.string().required().min(2).max(50),
        notice: joi.string().required().min(2)
    })
    return schema.validate(data);
}

const registerMessegerValidate = (data) => {
    const schema = joi.object({
        fullNamePoster: joi.string().required(),
        functionPoster: joi.string().required(),
        idPoster: joi.string().required(),
        idReceiver: joi.string().required(),
        subject: joi.string().allow('')
    })
    return schema.validate(data);
}

const registerFinanceValidate = (data) => {
    const schema = joi.object({
        fullName: joi.string().required(),
        idAdmin: joi.string().required(),
        value: joi.number().required(),
        description: joi.string().required(),
        inOut: joi.string().required()
    })
    return schema.validate(data);
}

const registerClassValidate = (data) => {
    const schema = joi.object({
        idAdmin: joi.string().required(),
        series: joi.string().required(),
        userClass: joi.string().required(),
        schoolName: joi.string().required()
    })
    return schema.validate(data);
}

//update
const updateStudentValidate = (data) => {
    const schema = joi.object({
        _id: joi.string().required(),
        lastName: joi.string().required().min(3).max(50),
        email: joi.string().required().min(5).max(150),
        password: joi.string().required().allow('').min(6).max(20),
        series: joi.string().required().min(1).max(2),
        userClass: joi.string().required().min(1).max(2),
        firstName: joi.string().required().min(3).max(50),
        fullName: joi.string().required().min(3).max(200),
        phone: joi.string().min(8).max(16),
        birthDate: joi.string().required().min(1).max(99),
    })

    return schema.validate(data);
}

const updateEmployeerValidate = (data) => {
    const schema = joi.object({
        _id: joi.string().required(),
        lastName: joi.string().required().min(3).max(50),
        email: joi.string().required().min(5).max(150),
        password: joi.string().required().allow('').min(6).max(20),
        firstName: joi.string().required().min(3).max(50),
        fullName: joi.string().required().min(3).max(200),
        phone: joi.string().min(8).max(16),
        birthDate: joi.string().required().min(1).max(99),
        functionUser: joi.string().required(),
        subject: joi.string().allow('')
    })

    return schema.validate(data);
}

//delete
const deleteUserValidate = (data) => {
    const schema = joi.object({
        _id: joi.string().required()
    })
    return schema.validate(data);
}

//search
const searchUserValidate = (data) => {
    const schema = joi.object({
        idAdmin: joi.string().required(),
        fullName: joi.string().allow('')
    })

    return schema.validate(data);
}

const searchScheduleValidate = (data) => {
    const schema = joi.object({
        idAdmin: joi.string().required(),
        series: joi.string().allow(''),
        userClass: joi.string().allow(''),
        schoolName: joi.string(),
        subject: joi.string().allow('')
    })
    return schema.validate(data);
}

const searchEventValidate = (data) => {
    const schema = joi.object({
        idAdmin: joi.string().required().min(2).max(600),
        schoolName: joi.string().required().min(2).max(100),
    })
    return schema.validate(data);
}

const searchFinanceValidate = (data) => {
    const schema = joi.object({
        idAdmin: joi.string().required().min(2).max(600),
    })
    return schema.validate(data);
}

const registerWeeklyScheduleValidate = (data) => {
    const schema = joi.object({
        idAdmin: joi.string().required().min(2).max(600),
        day: joi.string().required(),
        weeklySchedule: joi.array().required(),
        series: joi.string().required(),
        userClass: joi.string().required()
    })
    return schema.validate(data);
}

const searchWeeklyScheduleValidate = (data) => {
    const schema = joi.object({
        idAdmin: joi.string().required().min(2).max(600),
        series: joi.string().required(),
        userClass: joi.string().required()
    })
    return schema.validate(data);
}

const registerContentValidate = (data) => {
    const schema = joi.object({
        idAdmin: joi.string().required().min(2).max(600),
        idPoster: joi.string().required().min(2).max(600),
        title: joi.string().required().min(2).max(600),
        text: joi.string().required().allow(''),
        urlVideo: joi.string().allow(''),
        urlAbout: joi.string().allow(''),
        posterName: joi.string().required().min(2).max(600),
        subject: joi.string().required().min(2).max(600),
        userClass: joi.string().required(),
        series: joi.string().required()
    })
    return schema.validate(data);
}

const searchContentValidate = (data) => {
    const schema = joi.object({
        idAdmin: joi.string().required().min(2).max(600),
        idPoster: joi.string().allow('').min(2).max(600),
        title: joi.string().allow('').min(2).max(600),
        subject: joi.string().allow('').min(2).max(600),
        userClass: joi.string().allow(''),
        series: joi.string().allow('')
    })
    return schema.validate(data);
}

module.exports.loginValidate = loginValidate;
module.exports.registerStudentValidate = registerStudentValidate;
module.exports.registerEmployeerValidate = registerEmployeerValidate;
module.exports.searchUserValidate = searchUserValidate;
module.exports.deleteUserValidate = deleteUserValidate;
module.exports.registrationScheduleValidate = registrationScheduleValidate;
module.exports.searchScheduleValidate = searchScheduleValidate;
module.exports.updateStudentValidate = updateStudentValidate;
module.exports.registerEventsValidate = registerEventsValidate;
module.exports.searchEventValidate = searchEventValidate;
module.exports.updateEmployeerValidate = updateEmployeerValidate;
module.exports.registerMessegerValidate = registerMessegerValidate;
module.exports.registerFinanceValidate = registerFinanceValidate;
module.exports.searchFinanceValidate = searchFinanceValidate;
module.exports.registerClassValidate = registerClassValidate;
module.exports.registerWeeklyScheduleValidate = registerWeeklyScheduleValidate;
module.exports.searchWeeklyScheduleValidate = searchWeeklyScheduleValidate;
module.exports.registerContentValidate = registerContentValidate;
module.exports.searchContentValidate = searchContentValidate;