const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define( 'user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    email: {type:DataTypes.STRING, unique: true},
    password: {type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue: "USER"}
})
const Inter = sequelize.define( 'inter', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    nameUser: {type:DataTypes.STRING},
    data: {type:DataTypes.STRING},
    time:{type:DataTypes.STRING},
    classCar: {type:DataTypes.STRING},
    nameService: {type:DataTypes.STRING},
    userId: {type:DataTypes.INTEGER}
})
const Basket = sequelize.define( 'basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})
const BasketService = sequelize.define( 'basket_service', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})
const Service = sequelize.define( 'service', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: true, unique: true},
    price: {type: DataTypes.INTEGER, allowNull: true},
    img: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING}
})

User.hasMany(Inter)
Inter.belongsTo(User)

Basket.hasMany(BasketService)
BasketService.belongsTo(Basket)

BasketService.hasOne(Service)
Service.belongsTo(BasketService)

module.exports = {
    User, Basket, BasketService, Service, Inter
}