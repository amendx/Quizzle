import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { QuestionService } from '../../question/services/question.service';
import { findLast } from '@angular/compiler/src/directive_resolver';
import { Question } from '../../question/models/question.model';

@Component({
    selector: 'app-quiz-results',
    templateUrl: './quiz-results.component.html',
    styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit {
    @Input('currentQuiz') currentQuiz: any;
    currentQuestions: Question[] = [];
    scoreQuestions: number = 0;
    totalQuestions: number = 0;
    goodGrade: boolean = false;

    constructor(private questionService: QuestionService) { }

    ngOnInit() {
        this.getAnswersFromQuestion();
        this.isGoodGrade();
    }

    isGoodGrade() {
        let score = Math.round((this.scoreQuestions / this.totalQuestions) * 100) / 100;
        //if user had a nice grade, returns green text. GOOD GRADES: > 0.67
        if (score >= 0.67) {
            this.goodGrade = true;
        } else if (score <= 0.66)
            this.goodGrade = false;
    }


    getAnswersFromQuestion() {
        //if current question ID is found in answers, pass value
        this.currentQuestions = this.currentQuiz.questions;
        let loop;
        this.currentQuestions.forEach((question, i) => {
            this.currentQuiz.answers.forEach(answer => {
                if (loop) { return; }
                if (answer.id.toString() === question.correctAnswer) {
                    this.currentQuestions[i].isCorrect = true;
                    this.scoreQuestions++;
                    loop = true;
                } else {
                    this.currentQuestions[i].isCorrect = false;
                }
            });
            loop = false;
            this.totalQuestions++;
        })
    }
}


