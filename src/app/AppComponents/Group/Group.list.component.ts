import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms'
import path from '../../Services/path'
import { Group } from '../../Services/Objects'
import { GroupService } from '../../Services/index.service'


@Component({
    selector: 'app-groups',
    templateUrl: './../../Templates/groups.html'
})
export class GroupsComponent implements OnInit {

    search: string;
    dialog: boolean = false;
    groups: Array<Group> = [];
    loaded: boolean = false;
    text: string = '';
    listGroups: Array<Group> = [];
    constructor(private http: GroupService) {}
    getGroup() {
        this.http.getList((res) => {
            this.listGroups = res;
            this.groups = res;
            this.loaded = true;
        }, ['name'])
    }
    ngOnInit() {
        this.getGroup()
    }
    searchAction() {
        this.listGroups = this.groups.filter(item => item.name.indexOf(this.search) == 0)
    }
    dialogToggle() {
        this.dialog = !this.dialog;
    }
    onSend(name) {
        this.dialogToggle()
        this.http.post({ name: name, participants: [] }, (res) => {
            this.getGroup();
            this.searchAction();
        })
    }
    delete(id) {
        this.http.delete(id, () => {
            this.groups = this.groups.filter(item => item.id != id)
            this.listGroups = this.listGroups.filter(item => item.id != id)
        })
    }
}
