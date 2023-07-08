//import express from 'express';
const express = require('express');
const router = require('./routes/index');

const db = require('./config/db');

db.authenticate()
    .then(()=>console.log('Base de datos conectada'))
    .catch(error => console.log(error))

const app = express();

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG

app.set('view engine','pug');

//OBtener el año actual

app.use((req,res,next) =>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes"
    return next();

})

//Agregar body parser

app.use(express.urlencoded({extended:true}));


//Agregar public

app.use(express.static("public"));

//Agregar router

app.use('/',router);


app.listen(port,()=>{
    console.log(`El servisor esta funcionando en el puerto ${port}`)
});