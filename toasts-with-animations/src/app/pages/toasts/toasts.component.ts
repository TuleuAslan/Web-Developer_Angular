import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IToast} from '../../types';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss'],
  animations: [
    trigger('fadeLeft', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
        }),
        animate('2s'),
      ]),
      transition(':leave', [
        animate('2s', style({
          opacity: 0,
          transform: 'translateX(-80px)',
        })),
      ])
    ]),
    trigger('fadeCenter', [
      transition(':enter',
        [
          style({ opacity: 0 }),
          animate(
            '2s',
            style({ opacity: 1 })
          )
        ]
      ),
      transition(':leave',
        [
          style({ opacity: 1 }),
          animate(
            '2s',
            style({ opacity: 0 })
          )
        ]
      )
    ]),
    trigger('fadeRight', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        }),
        animate('2s'),
      ]),
      transition(':leave', [
        animate('2s', style({
          opacity: 0,
          transform: 'translateX(80px)',
        })),
      ])
    ]),
  ]
})
export class ToastsComponent implements OnInit {

  constructor() { }

  toastsTS: IToast[] = [];
  toastsTC: IToast[] = [];
  toastsTE: IToast[] = [];
  toastsCS: IToast[] = [];
  toastsCC: IToast[] = [];
  toastsCE: IToast[] = [];
  toastsBS: IToast[] = [];
  toastsBC: IToast[] = [];
  toastsBE: IToast[] = [];

  cnt = 0;
  value = 0;
  titleCtrl = new FormControl('');
  contentCtrl = new FormControl('', [Validators.required]);
  createForm = new FormGroup({
    title: this.titleCtrl,
    content: this.contentCtrl,
  });
  selectCtrl = new FormControl(1, [Validators.required]);
  verticalCtrl = new FormControl('top', [Validators.required]);
  horizontalCtrl = new FormControl('start', [Validators.required]);
  showTitleCtrl = new FormControl(true, [Validators.required]);
  hasCloseBtnCtrl = new FormControl(true, [Validators.required]);
  showDurationCtrl = new FormControl(true, [Validators.required]);

  ngOnInit(): void {
  }
  createToast(): void {
    this.cnt += 1;
    const value: IToast = {
      id: this.cnt,
      title: this.titleCtrl.value,
      content: this.contentCtrl.value,
      horizontalPos: this.horizontalCtrl.value,
      verticalPos: this.verticalCtrl.value,
      isSuccess: this.selectCtrl.value,
      showTitle: this.showTitleCtrl.value,
      hasCloseBtn: this.hasCloseBtnCtrl.value,
      durationValue: this.value,
      showDuration: this.showDurationCtrl.value,
    };
    console.log('createToastValues', value);

    if (value.verticalPos === 'top') {
      if (value.horizontalPos === 'start') {
        this.toastsTS.push(value);
      }
      if (value.horizontalPos === 'center') {
        this.toastsTC.push(value);
      }
      if (value.horizontalPos === 'end') {
        this.toastsTE.push(value);
      }
    }
    if (value.verticalPos === 'center') {
      if (value.horizontalPos === 'start') {
        this.toastsCS.push(value);
      }
      if (value.horizontalPos === 'center') {
        this.toastsCC.push(value);
      }
      if (value.horizontalPos === 'end') {
        this.toastsCE.push(value);
      }
    }
    if (value.verticalPos === 'bottom') {
      if (value.horizontalPos === 'start') {
        this.toastsBS.push(value);
      }
      if (value.horizontalPos === 'center') {
        this.toastsBC.push(value);
      }
      if (value.horizontalPos === 'end') {
        this.toastsBE.push(value);
      }
    }
  }

  closeToast(value: IToast): void {
    if (value.verticalPos === 'top') {
      if (value.horizontalPos === 'start') {
        this.toastsTS.splice(
          this.toastsTS.findIndex((i) => i.id === value.id),
          1
        );
      }
      if (value.horizontalPos === 'center') {
        this.toastsTC.splice(
          this.toastsTC.findIndex((i) => i.id === value.id),
          1
        );
      }
      if (value.horizontalPos === 'end') {
        this.toastsTE.splice(
          this.toastsTE.findIndex((i) => i.id === value.id),
          1
        );
      }
    }
    if (value.verticalPos === 'center') {
      if (value.horizontalPos === 'start') {
        this.toastsCS.splice(
          this.toastsCS.findIndex((i) => i.id === value.id),
          1
        );
      }
      if (value.horizontalPos === 'center') {
        this.toastsCC.splice(
          this.toastsCC.findIndex((i) => i.id === value.id),
          1
        );
      }
      if (value.horizontalPos === 'end') {
        this.toastsCE.splice(
          this.toastsCE.findIndex((i) => i.id === value.id),
          1
        );
      }
    }
    if (value.verticalPos === 'bottom') {
      if (value.horizontalPos === 'start') {
        this.toastsBS.splice(
          this.toastsBS.findIndex((i) => i.id === value.id),
          1
        );
      }
      if (value.horizontalPos === 'center') {
        this.toastsBC.splice(
          this.toastsBC.findIndex((i) => i.id === value.id),
          1
        );
      }
      if (value.horizontalPos === 'end') {
        this.toastsBE.splice(
          this.toastsBE.findIndex((i) => i.id === value.id),
          1
        );
      }
    }
  }

}
