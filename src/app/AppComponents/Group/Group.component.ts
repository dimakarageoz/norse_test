import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../../Services/API.service'
import path from '../../Services/path'


@Component({
    selector: 'app-group',
    templateUrl: './../../Templates/group.html'
})

export class GroupComponent {
    id: number;
    dialog: boolean = false;
    participants: any[]= [];
    loaded: boolean = false;
    constructor(
        private route: ActivatedRoute,
        private http: ApiService,
        private httpUser: ApiService,
    ) {
        this.http.path = path.group;
        // this.httpUser.path = path.user;
        this.id = route.snapshot.params['id'];
    }

    getGroup() {
        this.http.getOne(this.id, (res) => {
            console.log(res)
            this.participants = res.participants;
            this.loaded = true;
        })
    }
    ngOnInit() {
        this.getGroup()
    }
    dialogToggle() {
        this.dialog = !this.dialog;
    }
    onSend(name) {
        this.dialogToggle()
        this.httpUser.getList((res) => {
            console.log(res)
        }, null, {
            email: name
        })
    }
}