import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../services/answer.service';
import { Answer } from '../models/answer.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  constructor(private answerService: AnswerService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }
  //variables may be set to any only because the REST server is not model driven
  currentAnswer = <Answer>{};

  isEditing: boolean = false;
  ngOnInit() {
    this.loadAnswer()
  }

  saveAnswer(form: NgForm) {
    //if is editing, has ID
    if (!this.currentAnswer.id) {
      this.isEditing = false;
      //generate random ID ~ may cause id duplicate due to server !model-driven and !unique
      this.currentAnswer.id = Math.floor(Math.random() * 1000);
      this.answerService.add(this.currentAnswer).subscribe(
        res => {
          //show toastr for success on saving question
          this.toastr.success('Answer Saved!')
          form.reset();
          this.currentAnswer = <Answer>{};
        }, err => this.toastr.error('Something Went Wrong!'));
    } else {
      this.isEditing = true;
      this.answerService.update(this.currentAnswer).subscribe(
        res => {
          this.toastr.success('Answer Updated!')
        }, err => this.toastr.error('Something Went Wrong!'));
    }
  }

  deleteAnswer(id?: number) {
    this.answerService.delete(this.currentAnswer.id).subscribe(data => {
      console.log(data);
      this.toastr.info('Answer Deleted!')
      this.router.navigateByUrl('/answer');
    })
  }

  //load answer by router :id
  loadAnswer() {
    //getting param snapshot of route
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.answerService.getById(id).subscribe(response => {
        if (Object.keys(response).length > 0) {
          //Return statement is an array, accessing first result:
          this.currentAnswer = response[0];
        } else {
          this.toastr.error('Nothing Here');
          this.router.navigateByUrl('/answer');
        }
      })

    }

  }


}
