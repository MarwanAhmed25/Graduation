import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

//initial port and app
const port = process.env.port ||5000;
const app = express();
//usig middel ware cors and body parser
app.use(cors());
app.use(bodyParser.json());


//configre the server to listen to port and running it
app.listen(port, (): void => {
    console.log(`server running on port ${port}`);
});

app.get('/',(req,res)=>{
    res.send('hello');
});
//export the app to use when importing the file
export default app;