import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  lang: string = 'english';
  constructor(
    private translate: TranslateService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  switchLanguage(language: string) {
    this.translate.use(language);
    this.lang = language;

    let currentUrl = this._router.routerState.snapshot.root;
    console.log(currentUrl);

    let isQuizRoute = false;
    while (currentUrl) {
      if (currentUrl.firstChild) {
        currentUrl = currentUrl.firstChild;
      } else {
        break;
      }
      if (
        currentUrl.routeConfig &&
        currentUrl.routeConfig.path === 'quiz/:language'
      ) {
        isQuizRoute = true;
        break;
      }
    }

    if (isQuizRoute) {
      // Navigate to the quiz route with the new language
      this._router.navigate(['/quiz', this.lang]);
    } else {
      // Optionally, handle cases where you're not on the quiz route
      this._router.navigate(['/quiz', this.lang]);
    }
  }
}
