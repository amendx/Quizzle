import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
//encrypt passwords
import * as crypto from 'crypto-js';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


    constructor(private registerService: RegisterService, private toastr: ToastrService) { }
    currentUser = <User>{};

    ngOnInit() {
    }

    saveUser(form: NgForm) {
        this.currentUser.id = Math.floor(Math.random() * 1000);
        this.currentUser.password = crypto.AES.encrypt(this.currentUser.password, "Secret Passphrase").toString();
        console.log(this.currentUser.password)
        this.registerService.add(this.currentUser).subscribe(
            res => {
                //show toastr for success on saving user
                this.toastr.success('User Saved!');

                form.reset();
            }, err => this.toastr.error('Something Went Wrong!'));
    }


}
