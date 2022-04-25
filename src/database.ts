import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { db_host, db_user, db_password, db_name } = process.env;
const { test_db_host, test_db_user, test_db_password, test_db_name } = process.env;

const environment = process.env.environment ||'production'; 


let Client:Pool ;
//test db connection
if(environment === 'development'){
    console.log(environment);
    
    Client= new Pool({
        host: 'ec2-52-18-116-67.eu-west-1.compute.amazonaws.com',
        database: 'd4c0lbm1rr34tg',
        user: 'yaeobcniqomegb',
        password: '77ed86befd3929c5ec5bab3e5a3d13b0082ed1e58243b4a15e34a27a1836558a',
        port:5432
    });

}else{//the main db connection
    console.log(environment);

    Client= new Pool({
        host: db_host,
        database: db_name,
        user: db_user,
        password: db_password,
        port:5432,
        ssl:true
    });

}

export default Client;