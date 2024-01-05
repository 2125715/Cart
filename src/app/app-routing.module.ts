import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductFormComponent } from './component/add-product-form/add-product-form.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { LoginComponent } from './component/login/login.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { OrderdisplayComponent } from './component/orderdisplay/orderdisplay.component';
import { ProductsComponent } from './component/products/products.component';
import { RegisterComponent } from './component/register/register.component';
import { ViewordersComponent } from './component/vieworders/vieworders.component';
import { HomeComponent } from './home/home.component';
import { AuthguardService } from './service/authguard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'products', component: ProductsComponent ,canActivate:[AuthguardService] ,data:{protected:true}},
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  //{ path: 'orderdisplay', component: OrderdisplayComponent },
  { path: 'vieworders', component: ViewordersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addProduct', component: AddProductFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'addProductForm',component:AddProductFormComponent},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
