const uuid = require('uuid')
const path = require('path')
const {Service} = require('../models/models')
const ApiError = require('../error/ApiError')

class serviceController {
    async create(req, res, next){ 
        try {
            const {name, price, description} = req.body
            const {img} = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', filename))
            const service = await Service.create({name, price, description, img:filename})
            return res.json(service)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }       
    } 
    async getAll(req, res){
        let service = await Service.findAll()
        return res.json(service)
    } 
    async getOne(req, res){
        const {id} = req.params
        const service = await Service.findOne(
                {where: {id}}
            )
            return res.json(service)
    }      
}

module.exports = new serviceController() 

