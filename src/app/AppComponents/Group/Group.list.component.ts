import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms'
import path from '../../Services/path'
import { Group } from '../../Services/Objects'
import { ApiService } from '../../Services/API.service'


@Component({
    selector: 'app-groups',
    templateUrl: './../../Templates/groups.html',
    styleUrls: ['./../../Styles/color-purple.scss']
})
export class GroupsComponent implements OnInit {

    search: string;
    dialog: boolean = false;
    groups: Group[] = [];
    text: string = '';
    listGroups: Group[] = [];
    constructor(private http: ApiService) {
        this.http.path = path.group;
    }
    ngOnInit() {
        this.http.getList((res) => {
            this.listGroups = res;
            this.groups = res;
        })
    }
    searchAction() {
        this.listGroups = this.groups.filter(item => item.name.indexOf(this.search) == 0)
    }
    dialogToggle() {
        this.dialog = !this.dialog;
    }
    onSend(name) {
        this.dialogToggle()
        console.log(name)
        this.http.post({ name: name, participants: [] }, (res) => {
            this.groups.push(new Group(res));
        })
    }
    delete(id) {
        this.http.delete(id, () => {
            this.groups = this.groups.filter(item => item.id != id)
            this.listGroups = this.listGroups.filter(item => item.id != id)
        })
    }
}
