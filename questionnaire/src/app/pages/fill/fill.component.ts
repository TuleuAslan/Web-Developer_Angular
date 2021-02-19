import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {IQuestion, IResult} from '../../types';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.scss']
})
export class FillComponent implements OnInit {
  questionsList: IQuestion[] = [];
  results: IResult[] = [];
  title = '';
  timeLeft = 300;
  interval;

  constructor(private cookieService: CookieService, private router: Router, ) { }

  ngOnInit(): void {
    this.timeLeft = 300;
    this.title = this.cookieService.get('title');
    const cookieValue = JSON.parse(this.cookieService.get('questionsList'));
    console.log('cookieValuePFill', cookieValue);
    this.questionsList = cookieValue;
    this.startTimer();
  }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.router.navigate(['/result']);
        this.timeLeft = 300;
      }
    }, 1000);
  }
  inputClicked(qIndex: number, aIndex: number, qType: string) {
    console.log(qIndex, aIndex, qType);
    const res: IResult = {
      questionIndex: qIndex,
      answerIndexes: [],
      questionType: qType,
    };
    if (qType.toString() === '0') {
      res.answerIndexes = [aIndex];
      this.results[qIndex] = res;
    }
    else if (this.results[qIndex]) {
      const isAnswerChoose = this.results[qIndex].answerIndexes.includes(aIndex);
      console.log('already exist', isAnswerChoose);
      if (isAnswerChoose) {
        if (this.results[qIndex].answerIndexes.length > 1) {
          res.answerIndexes = this.results[qIndex].answerIndexes.filter((n) => n !== aIndex);
          this.results[qIndex] = res;
        } else {
          this.results = this.results.filter((n) => n.questionIndex !== qIndex);
        }
      } else {
        res.answerIndexes = [...this.results[qIndex].answerIndexes, aIndex];
        this.results[qIndex] = res;
      }
    }
    else {
        console.log('no');
        res.answerIndexes = [aIndex];
        this.results[qIndex] = res;
    }
    console.log('finalResult', this.results);
    this.cookieService.set('results', JSON.stringify(this.results));
  }
  showResults() {
    console.log('show');
    this.cookieService.set('results', JSON.stringify(this.results));
  }
}
