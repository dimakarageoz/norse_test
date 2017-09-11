export class User {
    constructor(obj) {
        const {email, name, id, phone, surname} = obj;
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.id = id;
        this.surname = surname;
    }
    name: string = '';
    surname: string = '';
    email: string = '';
    phone: string = '';
    id: number = 0;
}


export class Group {
    constructor(obj) {
        this.name = obj.name;
        this.id = obj.id;
        this.participants = obj.participants;
    }
    name: string = '';
    id: number = 0;
    participants: Array<{
        id: number;
        name: string;
    }> = [];
}