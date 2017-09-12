import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel, FormControl  } from '@angular/forms'


@Component({
    selector: 'app-group-dialog',
    templateUrl: './../../Templates/add-group-dialog.html'
})

export class GroupDialogComponent {

    name = new FormControl();
    @Output() onSubmit = new EventEmitter<string>();
    @Output() toggle = new EventEmitter<any>();
}