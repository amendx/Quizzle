import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  questions: any;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }


  getQuestions() {
    this.questionService.getAll().subscribe(data => {
      this.questions = data;
    });
  }

  /* TODO create homepage, maybe store in session storage.  */
}
