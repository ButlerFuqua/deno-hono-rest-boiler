import { Hono } from "https://jsr.io/@hono/hono/4.5.11/src/hono.ts";
import { Context } from "hono";
import { UsersService } from "../services/index.ts";

export class UsersController {

    app: Hono;
    service: UsersService;
    constructor(app: Hono){
        this.app = app;
        this.service = new UsersService();
    }

    addRoutes(){
        this.app.get('/', (context: Context) => {
            context.status(200);
            return context.json(this.service.searchAll());
        });
    }

}