const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 5000;

// solução no WSL2 para rodar o mongodb:
// no PowerShell: net stop MongoDB

// no WSL2 shell (ubuntu 20.04):
// terminal 1: $ mongod
// terminal 2: $ mongo 

const mongoAtlasUri = "mongodb+srv://admin:admin@cluster0.sjl2n.mongodb.net/curso-mern?retryWrites=true&w=majority"

mongoose.connect(mongoAtlasUri,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
}, function(err){
    if(err){
        console.log(err)
    } else {
        console.log('MongoDB conectado com sucesso!')
    }
});

app.use(cors()); // quais dominios estao consumindo a API
app.use(cookieParser());
app.use(express.json());

app.use(routes);


app.listen(port, function () {
    console.log(`Server rodando na porta ${port}`)
});