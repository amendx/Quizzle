import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerService } from './services/answer.service';
import { AnswerComponent } from './answer/answer.component';
import { AnswerRoutingModule } from './answer-routing.module';
import { AnswerDetailComponent } from './answer-detail/answer-detail.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    AnswerRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    AnswerComponent
  ],
  declarations: [AnswerComponent, AnswerDetailComponent],
  providers: [AnswerService]
})
export class AnswerModule { }
