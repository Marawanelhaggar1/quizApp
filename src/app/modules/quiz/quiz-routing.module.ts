import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: ':language', component: QuizComponent },
  { path: ':language/results', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
