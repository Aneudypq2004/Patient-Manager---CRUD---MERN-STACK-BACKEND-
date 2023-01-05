import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDb from './config/db.js';
import PatientRoutes from './routes/PatientRoutes.js';


//habilitar variables de entorno
const app = express();

dotenv.config();

// enable json
app.use(express.json())

//Habilitar cors

conectarDb()

const WhiteList = [process.env.FRONT_URL]

const corsOption = {
    origin: function (origin, callback) {
        if (WhiteList.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('No permitido por cors'))

        }
    }

}


app.use(cors(corsOption))

//Routing

app.use('/api/patient', PatientRoutes)


//app port
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log('funcionando en el puerto 4000')
})





