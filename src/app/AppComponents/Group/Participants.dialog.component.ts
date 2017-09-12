import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel, FormControl } from '@angular/forms'
import { ApiService } from '../../Services/API.service'


@Component({
    selector: 'app-participants-dialog',
    templateUrl: './../../Templates/add-participants-dialog.html'
})

export class ParticipantsDialogComponent {

    email = new FormControl();
    @Output() onSubmit = new EventEmitter<string>();
    @Output() toggle = new EventEmitter<any>();
}