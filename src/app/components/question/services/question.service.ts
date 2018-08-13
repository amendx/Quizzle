import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  configUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Question> {
    return this.http.get<Question>(`${this.configUrl}/questions`);
  }

  getById(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.configUrl}/questions?id=${id}`);
  }

  add(question: Question): Observable<Question> {
    return this.http.post<Question>(`${this.configUrl}/questions`, question);
  }

  update(question: Question): Observable<void> {
    return this.http.put<void>(`${this.configUrl}/questions/${question.id}`, question);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configUrl}/questions/${id}`)
  }

}
