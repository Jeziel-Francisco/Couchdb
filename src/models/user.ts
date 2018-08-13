import * as None from 'nano';

export interface IUser extends None.MaybeDocument {
    _id?: string;
    _rev?: string;
    firstName?: string;
    lastName?: string;
    type?: string;
    username?: string;
    password?: string;
    email?: string;
    company?: [{ _id }];
}