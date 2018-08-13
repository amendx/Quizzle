import { QuestionComponent } from "./question/question.component";
import { QuestionDetailComponent } from "./question-detail/question-detail.component";
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: 'question', children: [
            { path: '', component: QuestionComponent }
            ,
            { path: ':id', component: QuestionComponent }

        ]
    },
    { path: 'questions', component: QuestionDetailComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class QuestionRoutingModule { }