import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {IQuestion, IResult} from '../../types';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  questionsList: IQuestion[] = [];
  results: IResult[] = [];
  title = '';

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.title = this.cookieService.get('title');
    const cookieValue = JSON.parse(this.cookieService.get('questionsList'));
    console.log('cookieValuePFill', cookieValue);
    this.questionsList = cookieValue;
    const cookieValueResults = JSON.parse(this.cookieService.get('results'));
    console.log('cookieValueResultsPFill', cookieValueResults);
    this.results = cookieValueResults;
  }
  clearCookie() {
    this.cookieService.deleteAll();
  }

}
