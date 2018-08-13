import Service from './service';

import { Sign } from './../auth/auth';

import { DocumentScope } from 'nano';
import { IUser } from './../../models/user';

class Business {
    constructor() { }

    findAll(db: DocumentScope<{}>) {
        return Service.findAll(db);
    }

    create(db: DocumentScope<{}>, user: IUser) {
        user.type = 'user';
        return Service.create(db, user);
    }

    async auth(db: DocumentScope<{}>, user: IUser) {
        let payload = {
            sub: '',
            company: ['']
        }
        if (!user.username || !user.password) throw new Error('Username or Password Invalid');

        let data = await Service.findByUsername(db, user.username);
        if ((data.docs.length == 0) || (data.docs[0]['password'] != user.password)) throw new Error('Username or Password Invalid');

        payload.sub = data.docs[0]['_id'];
        payload.company = data.docs[0]['company'];

        let token = await Sign(payload);

        return {
            userId: payload.sub,
            company: payload.company,
            token: token
        };

    }
}

export default new Business();