import { Application } from "express";

import Context from './../middleware/context.middleware';

import UserCtrl from './../modules/user/controller';


export const UserRoutes = (app: Application) => {
    app.route('/api/v1/user').post(Context.setContext, UserCtrl.create);
    app.route('/api/v1/user/auth').post(Context.setContext, UserCtrl.auth);
    app.route('/api/v1/user').put(Context.setContext, UserCtrl.create);

    app.route('/api/v1/user').get(Context.setContext, UserCtrl.findAll);
}