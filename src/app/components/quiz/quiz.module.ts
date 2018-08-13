import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { QuizService } from './services/quiz.service';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';

@NgModule({
  imports: [
    CommonModule,
    QuizRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    QuizComponent,
    QuizDetailComponent,
    QuizResultsComponent
  ],
  declarations: [QuizComponent, QuizDetailComponent, QuizResultsComponent],
  providers: [QuizService]
})
export class QuizModule { }
