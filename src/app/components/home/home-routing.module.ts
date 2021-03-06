
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule { }