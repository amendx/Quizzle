import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    configUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }


    getAll(): Observable<User> {
        return this.http.get<User>(`${this.configUrl}/users`);
    }

    getByEmailAndPassword(email: string, password: string): Observable<User> {
        return this.http.get<User>(`${this.configUrl}/users?email=${email}&password=${password}`);
    }

    add(user: User): Observable<User> {
        return this.http.post<User>(`${this.configUrl}/users`, user);
    }

    getPassword(password: string): Observable<User> {
        return this.http.get<User>(`${this.configUrl}/users?password=${password}`);
    }

    getUserByEmail(email: string): Observable<User> {
        return this.http.get<User>(`${this.configUrl}/users?email=${email}`);
    }

}
