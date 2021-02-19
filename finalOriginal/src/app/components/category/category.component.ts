import { Component, OnInit } from '@angular/core';
import { ICategory, IProduct, IUser } from './../../models';
import { MyService} from './../../my.service';
import { ToastrService } from 'ngx-toastr';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BagComponent } from '../bag/bag.component';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(public service: MyService, private toastr: ToastrService, private _snackBar: MatSnackBar, public router: Router) { }
  categories: ICategory[] = [];
  category: ICategory;
  products: IProduct[] = [];
  inCart: IProduct[] = [];
  user: IUser;
  loggedUser = false;
  durationInSeconds = 5;
  badge = 0;
  emptyCart = true;
  sum = 0;
  adminLogged = false;
  // For LoggedAdmin
  categoryCtrl = new FormControl('', [Validators.required]);
  nameCtrl = new FormControl('', [Validators.required]);
  priceCtrl = new FormControl(0, [Validators.required]);
  urlCtrl = new FormControl('', [Validators.required]);
  firstForm = new FormGroup({
    category: this.categoryCtrl,
    name: this.nameCtrl,
    price: this.priceCtrl,
    url: this.urlCtrl,
  });
  // 
  ngOnInit() {
    if(localStorage.getItem('username')){
      this.loggedUser = true;
      this.user = this.service.getUserbyUsername(localStorage.getItem('username'));  
    }
    if(localStorage.getItem('admin')){
      this.router.navigate(['admin']);
    }
    this.categories.push({id: 1, name: 'Bread'}, {id: 2, name: 'Milk'}, {id: 3, name: 'Ice-Cream'}, {id: 4, name: 'Chocolate'}, 
    {id: 5, name: 'Drink'} );
    this.category = this.categories[0];
    this.showCategoryProducts(this.category);
  }
  
  showCategoryProducts(category: ICategory){
    // console.log(this.inCart,"CategoryPage");
    this.category = category;
    // this.service.sortProductsByCategory(category.id);
    this.products = this.service.getSortedProduct(this.category.name);
  }
  // getProducts(){
  //   if(this.category){
  //     this.products = this.service.getSortedProduct(this.category.name);
  //   }
  // }
  logout(){
    this.loggedUser = false;
    localStorage.clear();
  }
  addToCart(p: IProduct){
    this.sum = this.sum + p.price;
    this.emptyCart = false;
    this.badge++;
    this.inCart.push(p);
  }
  removeFromCart(p: IProduct){
    this.sum = this.sum - p.price;
    this.badge--;
    if(this.badge === 0){
      this.emptyCart = true;
    }
    this.inCart.forEach((element, index) => {
      if(element === p){
        this.inCart.splice(index,1);
        return
      } 
    });
  }
  openSnackBar() {
    this.inCart = [];
    this.badge = 0;
    this.emptyCart = true;
    this._snackBar.openFromComponent(BagComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  // createToastr(){
  //   console.log("Here we are!");
  //   this.toastr.success('You have purchased this products', 'Congratulations', {
  //     timeOut: 3000,
  //     progressBar: true,
  //     closeButton: true,
  //     positionClass: 'toast-top-right',
  //   });
  // }
  addQuestion() {}
  
}
