import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  //template: '<div><h1>hello</h1><div>{{name}}</div></div>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-practice';
  name = 'Angular';
  imageUrl =
    'https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png';
  date!: Date | string;
  cardNumber: string = '1111-1111-1111-1111';

  myName = 'katayama8000';

  linkStyle = 'underline';
  bcolor = '#F0F';
  price: number = 2356.357;

  constructor(private router: Router) {
    console.log(this.router.url);
  }

  test() {
    this.date = '';
  }

  show() {
    this.date = new Date();
  }

  public eventData: String = '';
  onReceiveEventFromChild(eventData: String) {
    this.eventData = eventData;
  }

  public isDisabled: boolean = true;

  public bold = true;
}
