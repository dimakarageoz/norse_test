import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../Services/index.service'
import { User } from '../../Services/Objects'
import path from '../../Services/path'



@Component({
    selector: 'app-user',
    templateUrl: './../../Templates/user.html'
})
export class UserComponent implements OnInit {
    id: number;
    response: string;
    name = new FormControl();
    surname = new FormControl();
    email = new FormControl();
    phone = new FormControl();
    user: User;

    constructor(
        private route: ActivatedRoute,
        private http: UserService,
    ) {
        this.id = route.snapshot.params['id'];
    }
    ngOnInit() {
        this.http.getOne(this.id, (res) => {
            this.user = res;
        })
    }
    edit(user) {
        
        let valid = true;
        let req = {name: '',surname: '',email: '',phone: ''};

        for (let item in user) {
            if(!user[item].valid && user[item].touched) {
                valid = false
            } else if (!user[item].touched) {
                req[item] = this.user[item]
            } else {
                req[item] = user[item].value
            }
        }
        if(valid) {
            this.http.edit(this.id, req, (res) => {
                this.response = "User's props update"
            })
        } else {
            this.response = "Props no update. Bad request"
        }
    }
}
