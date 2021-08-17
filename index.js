require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter');
const searchRouter = require('./routers/searchRouter');
const registrationRouter = require('./routers/registrationRouter');
const removeRouter = require('./routers/removeRouter');
const cors = require('cors');

//VARIÁVEIS DE AMBIENTE
const PORT = process.env.PORT;

//DATABASE
mongoose.connect(process.env.MONGO_CONNECTION_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error) => {
        if (!error) {
            console.log('Mongoose runing');
        } else {
            console.log(error);
        }
    }
)

//ROTAS
app.use(cors())
    //Users
app.use('/user', express.json(), userRouter);
    //Searchs
app.use('/search',express.json(), searchRouter);
    //Add Registers
app.use('/registration', express.json(), registrationRouter);
    //Remove Registers
app.use('/remove', express.json(), removeRouter);


//CAMINHO DA PÁGINA USADA EM PRODUÇÃO
app.use(express.static(path.join(__dirname, 'client/build/')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'), (error) => {
        if (error) {
            res.status(500).send(error)
        }
    })
})
app.listen(PORT, () => {
    console.log('Ruining')
})