import 'reflect-metadata';
import express from 'express';
import userRoutes from './routes/productRoute';
import { createConnection } from 'typeorm';


const app = express();
createConnection();


app.use(express.json());


//route
app.use(userRoutes);

const port = 8084;  
app.listen(port, ()=> {
    console.log('Server is up and running on port number ' + port);
});
