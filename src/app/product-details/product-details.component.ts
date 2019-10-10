import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: object;
  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
     
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { 
      this.db.collection('productos').doc(params.get('productId')).ref.get().then(
      doc => {  this.product = doc.data(); console.warn(doc.data()) }) 
    });    
  }
  

}
