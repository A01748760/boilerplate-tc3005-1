import express,{Request, Response, NextFunction} from 'express';
import AbstractController from '../controllers/AbstractController';

class Server{

    //Atributos de la clase
    private app: express.Application;
    private port:number;
    private env:string;

    //Métodos constructores
    constructor(appInit:{port:number;middlewares:any[];controllers:AbstractController[];env:string}){
        this.app=express();
        this.port=appInit.port;
        this.env=appInit.env;    
        this.loadMiddlewares(appInit.middlewares);
        this.routes(appInit.controllers);    
    }
    private loadMiddlewares(middlewares:any):void{
        middlewares.forEach((middleware:any)=>{
            this.app.use(middleware)
        })

    }
    private routes(controllers:AbstractController[]){
        this.app.get('/',(_any,res:Response)=>
    
        res.status(200).send({
            message: "The backend module is working",
            documentation:'http://github.com'

        })
        )
        controllers.forEach((controller)=>{
            this.app.use(`/${controller.prefix}`,controller.router);
        })
    }

    public init():void{
        this.app.listen(this.port,()=>{
            console.log(`Server:Running @'http://localhost:${this.port}'`);
        })
    }
}
export default Server;