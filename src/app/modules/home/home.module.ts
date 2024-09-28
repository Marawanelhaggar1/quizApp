import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteComponent } from './quote/quote.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomeComponent, QuoteComponent],
  imports: [CommonModule, TranslateModule, HomeRoutingModule],
})
export class HomeModule {}
