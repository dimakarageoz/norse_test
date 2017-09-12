import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { ApiService } from './api.service' 
import { User, Group } from './Objects'
import path from './path';

@Injectable()
export class UserService extends ApiService{
    constructor(http: Http){
        super(http);
        this.action = path.user;
    };
    getOne(id, cb, errorCb?) {
        super.getOne(id, (res)=> {
            let resUser = new User(res);
            cb(resUser)
        }, errorCb)
    }
    getList(cb, sort?, query?, errorCb?) {
        super.getList((res)=> {
            let resUser : User[] =[]
            for(let item in res) {
                resUser.push(new User(res[item]))
            }
            cb(resUser);
        },sort, query, errorCb)
    }
}

@Injectable()
export class GroupService extends ApiService {
    constructor(http: Http) {
        super(http);
        this.action = path.group
    };
    getOne(id, cb, errorCb?) {
        super.getOne(id, (res) => {
            let resUser = new Group(res);
            cb(resUser)
        }, errorCb)
    }
    getList(cb, sort?, query?, errorCb?) {
        super.getList((res) => {
            let resUser: Group[] = []
            for (let item in res) {
                resUser.push(new Group(res[item]))
            }
            cb(resUser);
        }, sort, query, errorCb)
    }
}