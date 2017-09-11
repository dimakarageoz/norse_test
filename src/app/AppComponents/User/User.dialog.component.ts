import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from '../../Services/Objects'

@Component({
    selector: 'app-user-dialog',
    templateUrl: './../../Templates/user-dialog.html'
})
export class UserDialogComponent {
    myForm: FormGroup = new FormGroup({
        'name': new FormControl('',
            Validators.required
        ),
        'surname': new FormControl('',
            Validators.required
        ),
        'email': new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        'phone': new FormControl('+380', [
            Validators.required,
            Validators.pattern('[+][0-9]{9,}')
        ])
    });
    @Output() onSubmit = new EventEmitter<FormGroup>();
    @Output() toggle = new EventEmitter<any>();
}
