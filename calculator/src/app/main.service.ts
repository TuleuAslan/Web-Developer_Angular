import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
  plusOperation(fn: string, sn: string) {
    return parseFloat(fn) + parseFloat(sn);
  }
  minusOperation(fn: string, sn: string) {
    return parseFloat(fn) - parseFloat(sn);
  }
  divideOperation(fn: string, sn: string) {
    return parseFloat(fn) / parseFloat(sn);
  }
  multiplyOperation(fn: string, sn: string) {
    return parseFloat(fn) * parseFloat(sn);
  }
  percentOperation(num: string) {
    return parseFloat(num) / 100;
  }
  sqrtOperation(num: string) {
    return Math.sqrt(parseFloat(num));
  }
  sqrOperation(num: string) {
    return parseFloat(num) * parseFloat(num);
  }
  oneDivToNumOperation(num: string) {
    return 1 / parseFloat(num);
  }
  putBrackets(num: string) {
    let text = '';
    if (parseFloat(num) < 0) {
      text = '(' + num + ')';
    } else {
      text = num;
    }
    return text;
  }
}
