"use strict";
/* import { Application, Response, Request } from 'express';
import { Brand, brand } from '../models/brand';
import isAdminFun from '../service/isAdmin';
import { middelware } from '../service/middelware';
import { brandSchema } from '../service/validation';





const brand_obj = new Brand();
//return all brands in database
async function index(req: Request, res: Response) {
    
    try {
        const resault = await brand_obj.index();
        res.status(200).json(resault);
    } catch (e) {
        res.status(400).json(`${e}`);
    }
}
//return only one brand from databse using id in request params
async function show(req: Request, res: Response) {
    try {
        const resault = await brand_obj.show(req.params.id as unknown as number);
        if(resault == undefined)
            return res.status(400).json('row not exist');
        res.status(200).json(resault);
    } catch (e) {
        res.status(400).json(`${e}`);
    }
}

//update and return the brand with id in request params and data in request body
async function update(req: Request, res: Response) {
    const token = req.headers.token as unknown as string;
    
    
    try {
        //check if the user super admin or admin
        const isAdmin = isAdminFun(req.body.admin_email,req.body.admin_password,token);
        //if admin or super admin the changes will occure to the brand
        if (isAdmin) {
            const b = await brand_obj.show(parseInt(req.params.id));
            if(b == undefined)
                return res.status(400).json('row not exist');
            if(req.body.name)
                b.name = req.body.name;
            
            if(req.body.description)
                b.description = req.body.description;
            //update new data to the database and return new data
            const resault = await brand_obj.update(b);
            res.status(200).json(resault);
        } else res.status(400).json('Not allowed this for you!!');

    } catch (e) {
        res.status(400).json(`${e}`);
    }
}
//create and return the brand with data in request body
async function create(req: Request, res: Response) {
   
    const token = req.headers.token as string;
    
    try {
        //check if the user super admin or admin
        const isAdmin = isAdminFun(req.body.admin_email,req.body.admin_password,token);
        //if admin or super admin the changes will occure to the brand
        if (isAdmin) {
            const b: brand = {
                name: req.body.name,
                description:req.body.description
            };
            //create new brand to the database and return new data
            const resault = await brand_obj.create(b);
            res.status(200).json(resault);
        } else res.status(400).json('Not allowed this for you!!');

    } catch (e) {
        res.status(400).json(`${e}`);
    }
}
//delete and return deleted using id in request params
async function delete_(req: Request, res: Response) {
    const token = req.headers.token as unknown as string;
    
    try {

        //check if the user super admin or admin
        const isAdmin = isAdminFun(req.body.admin_email,req.body.admin_password,token);
        //delete brand from the database and return deleted
        //if admin or super admin the changes will occure to the brand
        if (isAdmin) {
            const resault = await brand_obj.delete(Number(req.params.id));
            res.status(200).json(resault);
        } else res.status(400).json('Not allowed for you.');

    } catch (e) {
        res.status(400).json(`${e}`);
    }
    
}

function mainRoutes(app: Application) {
    app.get('/brands', index);
    app.get('/brands/:id', show);
    app.post('/brands', middelware(brandSchema.create), create);
    app.patch('/brands/:id', middelware(brandSchema.create), update);
    app.delete('/brands/:id', delete_);
}

export default mainRoutes;
 */ 
