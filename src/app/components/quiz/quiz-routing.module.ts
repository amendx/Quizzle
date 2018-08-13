import { QuizComponent } from "./quiz/quiz.component";
import { QuizDetailComponent } from "./quiz-detail/quiz-detail.component";
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: 'quiz', children: [
            { path: '', component: QuizComponent },
            { path: 'new', component: QuizDetailComponent },
            { path: ':id', component: QuizDetailComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class QuizRoutingModule { }