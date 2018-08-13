import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from '../models/question.model';
import { AnswerService } from '../../answer/services/answer.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  //variables may be set to any only because the REST server is not model driven
  questions: any;
  currentQuestion = <Question>{};
  answers: any;
  isEditing: boolean = false;
  constructor(private questionService: QuestionService, private route: ActivatedRoute, private toastr: ToastrService, private answerService: AnswerService) { }

  ngOnInit() {
    this.getAnswers();
    this.loadQuestion();
  }

  saveQuestion(form: NgForm) {
    //generate random ID ~ may cause id duplicate due to server !model-driven and !unique
    this.currentQuestion.id = Math.floor(Math.random() * 1000);
    this.questionService.add(this.currentQuestion).subscribe(
      res => {
        //show toastr for success on saving question
        this.toastr.success('Question Saved!')
        form.reset();
      }, err => this.toastr.error('Something Went Wrong!'));
  }


  getAnswers() {
    this.answerService.getAll().subscribe(data => {
      this.answers = data;
    });

  }

  loadQuestion() {
    this.isEditing = true;

    //getting param snapshot of route
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.questionService.getById(id).subscribe(response => {
        //Return statement is an array, accessing first result:
        this.currentQuestion = response[0];
      })
    }

  }


}




