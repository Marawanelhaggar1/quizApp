import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/core/service/Quiz/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class QuizComponent implements OnInit {
  quizForm!: FormGroup;
  quizQuestions: { question: string; options: string[]; answer: string }[] = [];
  language: string = 'english';
  score: number = 0;
  quizCompleted: boolean = false;
  progress: number = 0;
  remainingTime: number = 120;
  timerInterval: any;

  constructor(
    private route: ActivatedRoute,
    private _quizService: QuizService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const lang = params['language'];
      this.language = lang || 'english';
      this.loadQuizQuestions();
    });

    this.initializeForm();
    this.startTimer();
  }

  startTimer(): void {
    this.timerInterval = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        clearInterval(this.timerInterval);
        this.onSubmit();
      }
    }, 1000);
  }

  loadQuizQuestions() {
    this.quizQuestions = this._quizService.getQuizQuestions(this.language);

    this.initializeForm();
  }

  initializeForm() {
    this.quizForm = this.fb.group({
      answers: this.fb.array(this.quizQuestions.map(() => this.fb.control(''))),
    });

    this.progress = 0;
  }

  updateProgress(): void {
    // Calculate progress based on how many answers are selected
    const totalQuestions = this.quizQuestions.length;
    const answeredQuestions = this.answers.controls.filter(
      (control) => control.value
    ).length;
    this.progress = Math.floor((answeredQuestions / totalQuestions) * 100);
  }

  get answers(): FormArray {
    return this.quizForm.get('answers') as FormArray;
  }

  onSubmit(): void {
    this.score = this.quizQuestions.reduce((total, question, index) => {
      return total + (question.answer === this.answers.at(index).value ? 1 : 0);
    }, 0);

    this.quizCompleted = true;

    this.router.navigate(['/quiz', this.language, 'results'], {
      queryParams: { score: this.score, total: this.quizQuestions.length },
    });
  }

  reset() {
    this.quizForm.reset();
    this.progress = 0;
  }
}
