import express from "express";
import router from "./router"
import db from "./config/db";

//Conectar a base de datos
async function connecDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log("conexion exitosa a la base de datos")

    } catch (error) {
        console.log(error)
        console.log("Hubo un error al conectar a la base de datos")
    }
}

connecDB()

const server = express()

server.use('/api/products', router)



export default server