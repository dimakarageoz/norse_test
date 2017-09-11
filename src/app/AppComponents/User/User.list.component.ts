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
    users : User[] = [];
    text: string = '';
    listUsers: User[] = [];
    constructor( private http: ApiService) {
        this.http.path = path.user;
    }
    ngOnInit() {
        this.http.getList((res) => {
            this.listUsers = res;
            this.users = res;
        })
    }
    searchAction() {
        this.listUsers = this.users.filter(item => item.email.indexOf(this.search) == 0)
    }
    dialogToggle() {
        this.dialog = !this.dialog;
    }
    onSend(form) {
        this.dialogToggle()  
        this.http.post(form.value, (res) => {
            this.users.push(new User(res));
        })
    }
    delete(id) {
        this.http.delete(id, () => {
            this.users = this.users.filter(item => item.id != id)
            this.listUsers = this.listUsers.filter(item => item.id != id)
        })
    }
}
