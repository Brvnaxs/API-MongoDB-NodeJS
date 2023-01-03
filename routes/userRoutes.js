const express = require("express")
const User = require("../model/User")
const userRoutes = express.Router()

userRoutes.get("/", (req, res) => {
    res.json({message: "Teste."})
})

userRoutes.post("/user", async (req, res) => {
    const { name, email } = req.body
    const user = {
      name: name,
      email: email
    }
    try {
      await User.create(user)
      res.status(201).json({message: "Usuário criado com sucesso"})
    } catch (error) {
      res.status(500).json({error: error})
    }
  })

userRoutes.get("/users", async (req, res) =>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch (error){
        res.status(500).json({error: error})
    }
})

userRoutes.get("/user/id", async (req,res) =>{
    const id = req.params.id
    try{
        const user = await User.findOne({_id: id})
        if(!user){
            res.status(422).json({message: "Usuário não encontrado."})
            return
        }
        res.status(200).json(user)
    } catch(error){
        res.status(500).json({error: error})
    }
})
module.exports = userRoutes