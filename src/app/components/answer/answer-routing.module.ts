import { AnswerComponent } from "./answer/answer.component";
import { AnswerDetailComponent } from "./answer-detail/answer-detail.component";
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: 'answer', children: [
      { path: '', component: AnswerComponent },
      { path: ':id', component: AnswerComponent }
    ]
  },
  { path: 'answers', component: AnswerDetailComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AnswerRoutingModule { }