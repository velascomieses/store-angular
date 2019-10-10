import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
