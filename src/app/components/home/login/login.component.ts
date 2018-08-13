import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
import * as crypto from 'crypto-js';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    constructor(private registerService: RegisterService, private toastr: ToastrService, private router: Router, ) { }
    currentUser = <User>{};

    ngOnInit() {

    }

    getUserLogin() {
        this.registerService.getUserByEmail(this.currentUser.email).subscribe(result => {
            // let decrypted = 
            if (Object.keys(result).length > 0) {
                console.log(this.currentUser.password)
                if (crypto.AES.decrypt(result[0].password, "Secret Passphrase").toString(crypto.enc.Utf8) === this.currentUser.password) {
                    this.toastr.success('Login successful!')
                    this.router.navigateByUrl('/home');
                } else {
                    this.toastr.error('Wrong Password.')
                }
            } else {
                this.toastr.warning('Email not found.')
            }
        });


    }

    //ecryt/dec method
    encrypt() {
        var encrypted = crypto.DES.encrypt("encrypt", "Secret Passphrase");
        //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=

        var decrypted = crypto.DES.decrypt(encrypted, "Secret Passphrase").toString();
        //4d657373616765

        console.log('enc:', encrypted)
        console.log('dec:', decrypted)
        console.log('dec2:', decrypted.toString(crypto.enc.Utf8))
    }
}

