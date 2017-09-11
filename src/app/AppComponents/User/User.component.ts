import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../Services/API.service'
import { User } from '../../Services/Objects'
import path from '../../Services/path'



@Component({
    selector: 'app-user',
    templateUrl: './../../Templates/user.html'
})
export class UserComponent implements OnInit {
    id: number;
    private user: User;
    constructor(
        private route: ActivatedRoute,
        private http: ApiService,
    ) {
        this.http.path = path.user;
        this.id = route.snapshot.params['id'];
    }
    ngOnInit() {
        this.http.getOne(this.id, (res) => {
            this.user = res;
        })
    }
    edit(user) {
        let valid = true;
        for (let item in user) {
            if(!user[item]){ valid = false; break}
        }
        console.log(valid)
    }
}
