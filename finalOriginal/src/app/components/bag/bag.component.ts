import { Component, OnInit } from '@angular/core';
import { IProduct } from "./../../models";
import { MyService } from './../../my.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {
  inCart: IProduct[] = [];
  constructor(public service: MyService) { }

  ngOnInit() {
    this.inCart = this.service.getProductsInCart();
  }
  removeAnItem(id: number){
    this.inCart = this.service.removeFromCart(id);
  } 
}
