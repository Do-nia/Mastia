import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Final';
  constructor(private translate: TranslateService) {}
  setLang(lang: string) {
    this.translate.use(lang);
    const bdy = document.getElementsByTagName('body')[0];
    if ( lang === 'ar') {
      bdy.dir = 'rtl';
      bdy.setAttribute('class' , 'text-right');
      // console.log(bdy);
      // const link = document.createElement('link');
      // link.setAttribute( 'href' , 'https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css');
      // link.setAttribute('rel', 'stylesheet');
      // link.setAttribute('integrity', 'sha384-vus3nQHTD+5mpDiZ4rkEPlnkcyTP+49BhJ4wJeJunw06ZAp+wzzeBPUXr42fi8If');
      // link.setAttribute('crossorigin', 'stylesheet');
      // document.head.appendChild(link);
    } else {
      bdy.dir = 'ltr';
      bdy.setAttribute('class' , 'text-left');
    }
  }
}
