import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GroupService, UserService } from '../../Services/index.service'
import path from '../../Services/path'


@Component({
    selector: 'app-group',
    templateUrl: './../../Templates/group.html'
})

export class GroupComponent {
    id: number;
    dialog: boolean = false;
    participants: any[]= [];
    groupName: string;
    loaded: boolean = false;
    constructor(
        private route: ActivatedRoute,
        private http: GroupService,
        private httpUser: UserService,
    ) {
        this.id = route.snapshot.params['id'];
    }

    getGroup() {
        this.http.getOne(this.id, (res) => {
            this.groupName = res.name;
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