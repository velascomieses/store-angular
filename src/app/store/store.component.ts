import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public items = [];
  constructor(private db: AngularFirestore, private cartService: CartService) { 
    
  }

  ngOnInit() {
    this.db.collection('productos').snapshotChanges().subscribe( itemsSnapshot => {
      this.items = [];
      itemsSnapshot.forEach((itemData: any ) => {
          this.items.push({
            id: itemData.payload.doc.id,
            data: itemData.payload.doc.data()            
          })
      });
    });
  }
  addToCart( product, cant) {
    product.cant = cant;
    this.cartService.addToCart(product);
  }
  query( text: string ) {
    this.db.collection('productos').snapshotChanges().subscribe( itemsSnapshot => {
      this.items = [];
      itemsSnapshot.forEach((itemData: any ) => {
          if(itemData.payload.doc.data().nombre.includes(text) || text == "") {
            this.items.push({
              id: itemData.payload.doc.id,
              data: itemData.payload.doc.data()            
            })
          }
      });
    });
  }
}
