import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  titleCtrl = new FormControl('', [Validators.required]);

  constructor(private cookieService: CookieService) {
    this.titleCtrl.valueChanges.subscribe((value) => {
      this.cookieService.set('title', value);
    });
  }

  ngOnInit(): void {
  }

}
