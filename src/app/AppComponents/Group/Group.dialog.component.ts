import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel, FormControl  } from '@angular/forms'
import { ApiService } from '../../Services/API.service'


@Component({
    selector: 'app-group-dialog',
    templateUrl: './../../Templates/group-dialog.html'
})

export class GroupDialog {

    name = new FormControl();
    @Output() onSubmit = new EventEmitter<string>();
    @Output() toggle = new EventEmitter<any>();
}