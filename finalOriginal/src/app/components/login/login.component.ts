import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { MyService } from '../../my.service';
import { IUser } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  users: IUser[];
  nameCtrl = new FormControl('', [Validators.required]);
  usernameCtrl = new FormControl('', [Validators.required]);
  loginUsernameCtrl = new FormControl('', [Validators.required]);
  loginPasswordCtrl = new FormControl('', [Validators.required]);
  emailCtrl = new FormControl('', [
    Validators.required, 
    Validators.email, 
    Validators.minLength(4)]);
  passwordCtrl = new FormControl('', [
    Validators.required, 
    Validators.minLength(4)]);
  loginElements = [this.usernameCtrl, this.passwordCtrl];
  loginElementsCopy = ['username', 'password'];
  registrationElements = [
    this.nameCtrl, this.usernameCtrl,
    this.emailCtrl, this.passwordCtrl,
  ];
  registrationElementsCopy = [
    'name', 'username',
    'email', 'password',
  ];
  firstForm = new FormGroup({
    name: this.nameCtrl,
    username: this.usernameCtrl,
    email: this.emailCtrl,
    password: this.passwordCtrl,
  });

  secondForm = new FormGroup({
    username: this.loginUsernameCtrl,
    password: this.loginPasswordCtrl,
  });
  registrationNeeded = false;
  fail = false;
  constructor(public service: MyService, public router: Router) { 
    console.log(this.nameCtrl);
  }

  ngOnInit(): void {
    // if(localStorage.getItem('token'))
    // this.router.navigate(['posts'])
    // this.service
    //     .subscribeForUsers()
    //     // .pipe(map((todos) => todos.filter((todo) => !todo.completed)))
    //     .subscribe((users) => {
    //       console.log('myservice')
    //       this.users = users;
    //     }); 
  }

  getErrorMessage(er: FormControl) {
    if (er.hasError('required')) {
      return 'You must enter a value';
    }

    return er.hasError('email') ? 'Not a valid email' : '';
  }
  fName(e: string) {
    return this.firstForm.get(e);
  }
  sName(e: string) {
    return this.secondForm.get(e);
  }
  registrateBtnClicked() {
    this.registrationNeeded = true;
  }
  back() {
    this.registrationNeeded = !this.registrationNeeded;
  }
  gone(){
    this.fail = false;
  }
  login(secondFormValue: any) {
    console.log(secondFormValue);
    console.log(this.service.signIn(secondFormValue), 1);
    if(this.service.checkForAdmin(secondFormValue)){
      localStorage.setItem('admin', secondFormValue.username);
      this.router.navigate(['']);
    }
    if(this.service.signIn(secondFormValue)){
      localStorage.setItem('username', secondFormValue.username);
      localStorage.setItem('password', secondFormValue.password);
      this.router.navigate(['']);
    }
    else{
      this.fail = true;
    }
  }
  registrate() {
    // console.log('second form', this.secondForm.value);
    console.log('first form', this.firstForm.value);
    // this.service.registrate(this.firstForm.value);
  }
}
