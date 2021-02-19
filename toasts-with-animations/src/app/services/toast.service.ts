import { Injectable } from '@angular/core';
import {IToast} from '../types';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  toastsList: IToast[] = [];

  addToast(value: IToast ): void {
    console.log('addToasts', value);
    this.toastsList.push(value);
  }

  getToastsList() {
    return this.toastsList;
  }
}
