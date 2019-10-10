import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [];
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  total() {
      let total : number = 0; 
      for(let item of this.items ){ 
       total += item.cant * item.data.precio; 
      }
      return total;
  }
  buy() {
    this.cartService.update();
    this.cartService.clearCart();
    this.router.navigate( ['/store']);
  }      
}
