import { ThrowStmt } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {MyService } from './../../my.service'; 
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  categoryCtrl = new FormControl('', [Validators.required]);
  nameCtrl = new FormControl('', [Validators.required]);
  dnameCtrl = new FormControl('', [Validators.required]);
  priceCtrl = new FormControl(0, [Validators.required]);
  urlCtrl = new FormControl('', [Validators.required]);
  idCtrl = new FormControl(19);
  firstForm = new FormGroup({
    id: this.idCtrl,
    category: this.categoryCtrl,
    name: this.nameCtrl,
    price: this.priceCtrl,
    url: this.urlCtrl,
  });
  constructor(public router: Router, public service: MyService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('admin')){
      this.router.navigate(['']);
    }
  }
  logoutAdmin(){
    localStorage.removeItem('admin');
    this.router.navigate(['']);
  }
  addProduct(){
    this.service.addProduct(this.firstForm.value);
  }
  deleteProduct() {
    this.service.deleteProduct(this.dnameCtrl.value);
  }
}
