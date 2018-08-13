import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../services/answer.service';

@Component({
  selector: 'app-answer-detail',
  templateUrl: './answer-detail.component.html',
  styleUrls: ['./answer-detail.component.css']
})
export class AnswerDetailComponent implements OnInit {
  answers: any;
  constructor(private answerService: AnswerService) { }

  ngOnInit() {
    this.getAnswers()
  }

  getAnswers() {
    this.answerService.getAll().subscribe(data => {
      this.answers = data;
    });
  }

}
