import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {IToast} from '../../types';
import {interval} from 'rxjs';

@Component({
  selector: 'app-toast-item',
  templateUrl: './toast-item.component.html',
  styleUrls: ['./toast-item.component.scss'],
})
export class ToastItemComponent implements OnInit {
  @Input() toast: IToast;
  @Output() closeToast = new EventEmitter();
  curSec = 0;
  constructor() { }

  ngOnInit(): void {
    if (this.toast && this.toast.showDuration && this.toast.durationValue > 0) {
      this.startTimer(this.toast.durationValue);
    }
  }

  closeToastHandler(): void {
    this.closeToast.emit();
  }
  startTimer(seconds: number): void {
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      this.toast.durationValue = 100 - sec * 100 / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        sub.unsubscribe();
        this.closeToastHandler();
      }
    });
  }
}
