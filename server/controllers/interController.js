const uuid = require('uuid')
const path = require('path')
const {Inter} = require('../models/models')
const ApiError = require('../error/ApiError')

class interController {
    async create(req, res, next){ 
        try {
            const {nameUser, data, time, classCar, nameService} = req.body

            const inter = await Inter.create({nameUser, data, time, classCar, nameService})
            return res.json(inter)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }       
    } 
    async getAll(req, res){
        let inter = await Inter.findAll()
        return res.json(inter)
    }
    
    async getOne(req, res){
        const {id} = req.params
        const inter = await Inter.findOne(
                {where: {id}}
            )
            return res.json(inter)
    } 

}

module.exports = new interController() 