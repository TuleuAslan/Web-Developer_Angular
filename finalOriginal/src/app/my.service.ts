import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { isUndefined } from 'util';
import { Data } from './data'; 
import { IProduct, ICategory, IUser, IAdmin} from './models';
@Injectable({
  providedIn: 'root'
})
export class MyService {
  inCart: IProduct[] = [];
  // newProducts: IProduct[] = [];
  categories: ICategory[] = [];
  badge = 1;
  id = 0;
  constructor() { }
  subscribeForProducts(){
    return Data.products;
  }
  subscribeForProduct(id: number){
    return Data.products.find( u=>u.id===id);
  }
  // sortProductsByCategory(id: number){
  //   this.products = [];
  //   Data.products.forEach(element => {
  //     if(element.category === category){
  //       this.products.push(element);
  //     };
  //   });
  // }
  getSortedProduct(name: string){
    return Data.products.filter(u=>u.category===name);
  }
  cleanProducts(){
    this.inCart=[];
  }
  addToCart(id: number){
    this.badge = this.badge + 1;
    Data.products.forEach(element => {
      if(element.id===id){
        this.inCart.push(element);
      }
    });
  }
  getProductsInCart(){
    return this.inCart;
  }
  removeFromCart(id: number){
    this.badge = this.badge - 1;
    this.inCart = this.inCart.filter(item => item.id != id);
    return this.inCart;
  }
  getBadge(){
    return this.badge;
  }

  // Login
  // register(data: IRegisterData) {
  //   return this.http.post(`${this.serverUrl}/users`, {...data});
  // }
  // login(username: string, password: string) {
  //   return this.http.post(`${this.serverUrl}/sign-in`, {username, password});
  // }
  checkForAdmin(admin: IAdmin) {
    return Data.admin.find(u => u.username === admin.username && u.password === admin.password);
  }
  signIn(user: IUser) {
    return Data.users.find(u => u.username === user.username && u.password === user.password);
  }
  getUserbyUsername(username: string){
    return Data.users.find(u => u.username === username);
  }
  registrate(user: any) {
    try {
      Data.users.push({
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password,
      });
    } catch (error) {
      console.log("ServiceError", error);
    }
  }
  deleteProduct(name: string){
    Data.products.filter(u=> u.name != name);
  }
  getId(){

  }
  addProduct(product: any){
    Data.products.push(...product);
  }
}
