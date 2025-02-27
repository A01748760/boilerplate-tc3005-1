import {Request, Response} from 'express';
import AbstractController from './AbstractController';

class UserController extends AbstractController{
    //singleton
    private static instance : UserController;

    public static getInstance(): UserController{
        if(this.instance){
            return this.instance;
        }
        this.instance = new UserController("user");
        return this.instance
    }
    protected initRoutes(): void {
        this.router.get('/readUser',this.getReadUser.bind(this));
        this.router.get('/readUsers',this.getReadUsers.bind(this));
    }
    private async getReadUser(req:Request,res:Response){
        try{
            res.status(200).send({data:"User"});
        }
        catch(error){
            if(error instanceof Error){
                res.status(500).send({message : error.message})
            }else{
                res.status(501).send({message : "Error"})
            }
            
        }
        
    }
    private async getReadUsers(req:Request,res:Response){

    }
    
} 
export default UserController;