import {Component, Inject, OnInit} from '@angular/core';
import {DIALOG_CONFIG} from '../../services/toast.tokens';
import {IAlertConfig} from '../../types';
import {OverlayRef} from '@angular/cdk/overlay';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  title: string;
  content: string;
  isSuccess: number;
  showDuration: boolean;
  showTitle: boolean;
  hasCloseBtnCtrl: boolean;
  progressbarValue: number = 0;
  curSec: number = 0;

  constructor(
    private _overlayRef: OverlayRef,
    @Inject(DIALOG_CONFIG) private _config: IAlertConfig
  ) {
    this.title = _config.title;
    this.content = _config.content;
    this.isSuccess = _config.isSuccess;
    this.showTitle = _config.showTitle;
    this.hasCloseBtnCtrl = _config.hasCloseBtn;
    this.progressbarValue = _config.duration;
    this.showDuration = _config.showDuration;
    if (this.progressbarValue > 0 && this.showDuration) {
      this.startTimer(this.progressbarValue);
    }
  }

  ngOnInit(): void {
    console.log(this._overlayRef);
  }
  close() {
    this._overlayRef.dispose();
    this._config.close();
  }
  startTimer(seconds: number) {
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      const calc = (100 - (sec * 100) / seconds);
      this.progressbarValue = calc
      this.curSec = sec;

      if (this.curSec === seconds) {
        sub.unsubscribe();
        this._overlayRef.dispose();
        this._config.close();
      }
    });
  }
}
