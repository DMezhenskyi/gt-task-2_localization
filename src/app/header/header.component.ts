import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @HostBinding('class.header') header = true;
  currentLang = this._localize.parser.currentLang;

  constructor( private _localize: LocalizeRouterService ) {
  }

  ngOnInit() {
    // I tried to track changes with routerEvents Observable
    // But it didn't work. That's why I created some hack in changeLanguage()
    // I'm not deleting code so you can easier test this case
    this._localize.routerEvents.subscribe((lang: string) => {
      console.log(lang);
    }, error => console.log(error));
  }
  ngOnDestroy() {
    this._localize.routerEvents.unsubscribe();
  }

  changeLanguage(lang: string) {
    // Also when I'm using changeLanguage() aktive link not getting css class 'active'
    // The same issue there: @link: https://github.com/Greentube/localize-router/issues/39
    // So I created a little hack with ngClass

    this.currentLang = lang;
    this._localize.changeLanguage(lang);
  }

}
