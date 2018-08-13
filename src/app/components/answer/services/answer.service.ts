import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Answer } from '../models/answer.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  configUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Answer> {
    return this.http.get<Answer>(`${this.configUrl}/answers`);
  }

  add(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>(`${this.configUrl}/answers`, answer);
  }


  getById(id: number): Observable<Answer> {
    return this.http.get<Answer>(`${this.configUrl}/answers?id=${id}`);
  }

  update(answer: Answer): Observable<void> {
    return this.http.put<void>(`${this.configUrl}/answers/${answer.id}`, answer);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configUrl}/answers/${id}`)
  }
}
