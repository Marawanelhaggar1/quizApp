import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { TranslateModule } from '@ngx-translate/core';
import { TimePipePipe } from 'src/app/shared/pipes/time-pipe.pipe';

@NgModule({
  declarations: [QuizComponent, ResultsComponent, TimePipePipe],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class QuizModule {}
