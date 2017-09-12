import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms'
import  path from '../../Services/path'
import { User } from '../../Services/Objects'
import { ApiService } from '../../Services/API.service'


@Component({
    selector: 'app-users',
    templateUrl: './../../Templates/users.html'
})
export class UsersComponent implements OnInit {
    
    search: string;
    dialog: boolean = false;
    users: Array<User> = [];
    loaded: boolean = false;
    listUsers: Array<User> = [];
    constructor( private http: ApiService) {
        this.http.path = path.user;
    }
    getUsers() {
        this.http.getList((res) => {
            this.listUsers = res;
            this.users = res;
            this.loaded = true;
        }, ['name', 'surname'])
    }
    ngOnInit() {
        this.getUsers()
    }
    searchAction() {
        this.listUsers = (this.search) ? this.users.filter(item => {
            const fullName = `${item.name} ${item.surname}`   
            if(fullName.indexOf(this.search) == 0)
                return true;
            return false;
            }) : this.users
    }
    dialogToggle() {
        this.dialog = !this.dialog;
    }
    onSend(form) {
        this.dialogToggle()  
        this.http.post(form.value, (res) => {
            this.getUsers();
            this.searchAction()
       })
    }
    delete(id) {
        this.http.delete(id, () => {
            this.users = this.users.filter(item => item.id != id)
            this.listUsers = this.listUsers.filter(item => item.id != id)
        })
    }
}
