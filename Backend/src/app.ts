import express from 'express'
import morgan from 'morgan'
import cors from 'cors' //con este especificamos que servidores tienen permitido pedir cosas
import config from './config'
import videosRoutes from './routes/videos.routes';
const app = express()

app.set('port', config.PORT)

app.use(morgan('dev')); //muestra lo que pasa desde la terminal
app.use(cors()) //permite a cualquier servidor hacer peticiones
app.use(express.json());
app.use(express.urlencoded({extended:false})) //poder entender una peticion desde un formulario
app.use(videosRoutes);
export default app;