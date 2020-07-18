import {Roles} from "../enum/roles";


export class User {
    email: string;

    password: string;

    name: string;

    phone: string;

    address: string;

    active: boolean;

    role: string;

    constructor(){
        this.active = true;
        this.role = Roles.Customer;
}

}