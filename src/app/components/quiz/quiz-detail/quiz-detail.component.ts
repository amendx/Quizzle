import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../models/quiz.model';
import { QuestionService } from '../../question/services/question.service';
import { AnswerService } from '../../answer/services/answer.service';
import { Question } from '../../question/models/question.model';
import { Answer } from '../../answer/models/answer.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {
  currentQuiz = <Quiz>{};
  currentQuestion = <Question>{};
  questions: any = [];
  answers: any = [];
  currentQuizAnswer = <Quiz>{};
  currentAnswers: any = [];
  foundAnswers: any = [];
  constructor(private route: ActivatedRoute, private quizService: QuizService, private toastr: ToastrService, private questionService: QuestionService, private answerService: AnswerService) { }

  ngOnInit() {
    this.getQuiz();
    this.currentQuizAnswer.answers = [];

  }

  getQuestionsById() {
    let quizQuestions = this.currentQuiz.questions;

    if (quizQuestions && quizQuestions.length > 0) {
      quizQuestions.forEach(id => {
        //get question by id
        this.questionService.getById(id).subscribe(data => {
          //push question values into array of questions
          this.questions.push(data[0]);
          //assign current question to interation
          this.currentQuestion = data[0];
        });
      });
      this.currentAnswers = [];
    }
  }

  answerQuiz() {
    this.currentQuizAnswer.id = this.currentQuiz.id;
    this.currentQuizAnswer.description = this.currentQuiz.description;
    this.currentQuizAnswer.questions = this.questions;
    this.currentQuizAnswer.name = this.currentQuiz.name;
    this.currentQuizAnswer.answered = true;
    this.quizService.update(this.currentQuizAnswer).subscribe(
      res => {
        //show toastr for success on saving question
        this.toastr.success('Quiz Answered!')
        this.getQuiz();
      }, err => this.toastr.error('Quiz already answered!'));
  }
  getQuiz() {
    //getting param snapshot of route
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.quizService.getById(id).subscribe(response => {
        //Return statement is an array, accessing first result:
        this.currentQuiz = response[0];
        this.getQuestionsById();
      })
    }
  }

  onSelect(q, a) {
    let answerCorrect = {
      id: a.id,
      parent: q.id,
      selectedValue: a.value
    }
    this.currentQuizAnswer.answers.push(answerCorrect)
  };

}


