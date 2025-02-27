import { Router } from "express";
export default abstract class AbstractController{
    //Atributos
    private _router: Router = Router();
    private _prefix: string;
    
    public get router(): Router {
        return this._router;
    }
    public get prefix(): string {
        return this._prefix;
    }

    constructor(prefix:string){
        this._prefix=prefix;
        this.initRoutes();
    }
    protected abstract initRoutes():void
    
}