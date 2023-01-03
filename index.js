const express = require("express");
const app = express()
const DB_CONNECT = require("./database/configDB")
const mongoose = require("mongoose")
const userRoutes = require("./routes/userRoutes")
/*Configurações*/
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(userRoutes)
/*Conectando ao banco de dados */

mongoose.connect(DB_CONNECT)
.then( ()=>{
    app.listen(3000, ()=>{
        console.log("Servidor rodando na porta: 3000. Conectado com o mongo db")
    })
})
.catch((err)=>{
    console.log(err)
})

