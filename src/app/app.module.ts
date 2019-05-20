import { BrowserModule } from '@angular/platform-browser';
import { NgModule , APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from './translate.service';

import * as $ from 'jquery';
import { NgxPopper } from 'angular-popper';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslatePipe } from './translate.pipe';

export function setupTranslateFactory(
  // tslint:disable-next-line:ban-types
  service: TranslateService): Function {
  return () => service.use('en');
}


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'News', component: NewsComponent },
  { path: 'Contact', component: ContactComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    HomeComponent,
    ContactComponent,
    TranslatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPopper,
    CarouselModule ,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
