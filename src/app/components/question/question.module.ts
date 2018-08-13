import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './services/question.service';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    QuestionComponent
  ],
  declarations: [QuestionComponent, QuestionDetailComponent],
  providers: [QuestionService]
})
export class QuestionModule { }
