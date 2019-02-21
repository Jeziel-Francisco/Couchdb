import { DocumentScope } from "nano";
import { IUser } from "../../models/user";

class Service {
    constructor() { }

    findAll(db: DocumentScope<{}>) {
        return db.find({ selector: {} })
    }

    create(db: DocumentScope<{}>, user: IUser) {
        return db.insert(user);
    }

    findByUsername(db: DocumentScope<{}>, username: string) {
        let query = {
            selector: {
                type: { $eq: 'user' },
                username: { $eq: username }
            }
        }
        return db.find(query);
    }

    findById(db: DocumentScope<{}>, _id:string){
        return db.find();
    }

}

export default new Service();