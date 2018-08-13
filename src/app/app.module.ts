import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HeaderModule } from './components/header/header.module';
import { QuizModule } from './components/quiz/quiz.module';
import { QuestionModule } from './components/question/question.module';
import { AnswerModule } from './components/answer/answer.module';
import { HomeModule } from './components/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    HeaderModule,
    ToastrModule.forRoot(),
    //Animation to run toaster
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    HomeModule,
    QuestionModule,
    QuizModule,
    AnswerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
