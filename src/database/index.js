const Sequelize = require('sequelize')

const DB_NAME = "pets";
const DB_USER = "root";
const DB_PASS = "mysql";
const DB_CONFIG = {
    dialect: "mysql",
    host:"localhost",
    port:3306
};

let db = {}

    try {
        db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
    } catch(error){
       console.log(error) 
    }


    async function hasConection () {
        try{
            await db.authenticate()
            console.log('Sucesso na conexão com o banco de dados!')
        } catch (error){
            console.error("Houve um erro!")
        }
    }

    Object.assign(db, {hasConection} )


module.exports = db;