import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { AnswerService } from '../../answer/services/answer.service';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from '../../question/services/question.service';
import { Quiz } from '../models/quiz.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private questionService: QuestionService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService, private answerService: AnswerService, private quizService: QuizService) { }

  answers: any;
  quizes: any;
  questions: any;
  //Empty quiz object
  currentQuiz = <Quiz>{};
  isEditing: boolean = false;


  ngOnInit() {
    this.getAnswers();
    this.getQuestions();
    this.getQuiz();
  }


  getAnswers() {
    this.answerService.getAll().subscribe(data => {
      this.answers = data;
    });
  }

  getQuestions() {
    this.questionService.getAll().subscribe(data => {
      this.questions = data;
    });

  }
  getQuiz() {
    this.quizService.getAll().subscribe(data => {
      this.quizes = data;
    });

  }
  saveQuiz(form: NgForm) {
    //generate random ID ~ may cause id duplicate due to server !model-driven and !unique
    this.currentQuiz.id = Math.floor(Math.random() * 1000);
    this.currentQuiz.answered = false;
    this.quizService.add(this.currentQuiz).subscribe(
      res => {
        //show toastr for success on saving question
        this.toastr.success('Quiz Saved!')
        this.getQuiz();
        form.reset();
      }, err => this.toastr.error('Something Went Wrong!'));
  }


  getQuizById(id) {
    this.quizService.getById(id).subscribe(response => {
      this.currentQuiz = response[0];
      this.router.navigate([id], { relativeTo: this.route });
    })
  }
}
