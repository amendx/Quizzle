import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Http } from '@angular/http';
import { Quiz } from '../models/quiz.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  configUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.configUrl}/quiz`);
  }
  getById(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.configUrl}/quiz?id=${id}`);
  }

  add(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(`${this.configUrl}/quiz`, quiz);
  }

  update(quiz: Quiz): Observable<void> {
    return this.http.put<void>(`${this.configUrl}/quiz/${quiz.id}`, quiz);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configUrl}/quiz/${id}`)
  }
}
