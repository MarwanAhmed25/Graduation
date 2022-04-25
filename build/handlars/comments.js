"use strict";
/* import { Application, Response, Request } from 'express';
import { Comment, comment } from '../models/feedback';
import parseJwt from '../service/jwtParsing';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import isAdmin from '../service/isAdmin';
import {middelware} from '../service/middelware';
import {commentSchema} from '../service/validation';
dotenv.config();

const secret = process.env.token;
const comment_obj = new Comment();
//return all comments for one product with id in request params from database
async function index(req: Request, res: Response) {
    try {
        const resault = await comment_obj.index(Number(req.params.product_id));
        res.status(200).json(resault);
    } catch (e) {
        console.log(e);

        res.status(400).json(`${e}`);
    }
}
//return only one comment from databse using id and product_id in request params
async function show(req: Request, res: Response) {
    try {
        const resault = await comment_obj.show(Number(req.params.product_id),Number(req.params.id));
        if(resault == undefined)
            return res.status(400).json('row not exist');
        res.status(200).json(resault);
    } catch (e) {
        console.log(e);

        res.status(400).json(`${e}`);
    }
}

//update and return the comment with id and product_id in request params and data in request body
async function update(req: Request, res: Response) {
    let isTrue = false;
    const token = req.headers.token as unknown as string;
    

    try {
        if(token){//make sure that token is exist
            const permession = jwt.verify(token, secret as string);
            if(permession){
                isTrue = true;
            }else res.status(400).json('user not exist.');
        }else res.status(400).json('login required.');

        if (isTrue) {
            const c = await comment_obj.show(req.params.product_id as unknown as number, req.params.id as unknown as number);
            if(c == undefined)
                return res.status(400).json('row not exist');
            if(req.body.subject)
                c.subject = req.body.subject;

            if(req.body.message)
                c.message = req.body.message;

            if(req.body.vote)
                c.vote = Number(req.body.vote);
            //update and return new comment data
            const resault = await comment_obj.update(c);
            res.status(200).json(resault);
        } else res.status(400).json('user not exist.');
    } catch (e) {
        console.log(e);

        res.status(400).json(`${e}`);
    }
    
}
//create and return the comment with product_id in request params and data in request body
async function create(req: Request, res: Response) {
    
    let id,isTrue = false;
    const token = req.headers.token as unknown as string;
    //console.log(token);
    
    try {
        if(token){//make sure that token is exist
            const user = parseJwt(token);
            
            id = Number(user.user.id);
            // console.log(id);
            
            const permession = jwt.verify(token, secret as string);
            if(permession){
                isTrue = true;
            }else res.status(400).json('user not exist.');

        }else res.status(400).json('login required.');

        if (isTrue) {
            const c: comment = {
                subject: req.body.subject,
                message:req.body.message,
                user_id:id,
                product_id:Number(req.params.product_id),
                vote:req.body.vote
            };
            //update and return new comment data
            const resault = await comment_obj.create(c);
            res.status(200).json(resault);
        } else res.status(400).json('user not exist.');
    } catch (e) {
        console.log(e);

        res.status(400).json(`${e}`);
    }
    
}
//delete and return deleted using id and product_id in request params
async function delete_(req: Request, res: Response) {
    const {admin_email,admin_password} = process.env;
    let isTrue = false;
    const token = req.headers.token as unknown as string;
    
    try {
        if(token){
            const permession = jwt.verify(token, secret as string);
            if(permession){
                isTrue = true;
            } else return res.status(400).json('user not exist.');

        } else return res.status(400).json('login required.');

        const isA = isAdmin(admin_email as string ,admin_password as string,token);
        
        //if token is exist will delete the comment with product_id and id in params
        if (isA || isTrue) {
            const resault = await comment_obj.delete(Number(req.params.product_id),Number(req.params.id));
            return res.status(200).json(resault);
        } else return res.status(400).json('user not exist.');
    } catch (e) {
        console.log(e);
        
        res.status(400).json(`${e}`);
    }
        
    
}

function mainRoutes(app: Application) {
    
    app.get('/products/:product_id/comments', index);
    app.get('/products/:product_id/comments/:id', show);
    app.post('/products/:product_id/comments', middelware(commentSchema.create), create);
    app.patch('/products/:product_id/comments/:id', middelware(commentSchema.create), update);
    app.delete('/products/:product_id/comments/:id', delete_);


}

export default mainRoutes;
 */ 
