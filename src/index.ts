import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import usersRoutes from './handlars/users';
dotenv.config();

//initial port and app
const PORT = process.env.PORT ||5000;
const app = express();
//usig middel ware cors and body parser
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

//configre the server to listen to port and running it
app.listen(PORT, (): void => {
    console.log(`server running on port ${PORT}`);
});

app.get('/',(req,res)=>{
    res.send('hello');
});

usersRoutes(app);
//export the app to use when importing the file
export default app;
