import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor( private db: AngularFirestore ) { 

  }
  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  count() {
    return this.items.length;
  }
  update() {
    this.items.forEach(item => {
      this.db.collection('productos').doc(item.id).update( { 'cantidad' : (item.data.cantidad-item.cant) });
    });
  }      
}
