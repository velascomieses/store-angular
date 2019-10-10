import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  badge : Number;
  constructor( private cartService: CartService, private router: Router ) { }

  ngOnInit() {
    console.warn(this.cartService.count());
  }
  logout() {
    this.router.navigate( ['/login']);
  }
}
