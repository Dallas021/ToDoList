const Sequelize = require('sequelize')
const sequelize = new Sequelize("todolist" , "root" , "585103Aa@", {
    host: "localhost" ,
    dialect: "mysql" ,
    query: {raw: true}
})

module.exports = {
    Sequelize: Sequelize ,
    sequelize: sequelize
}