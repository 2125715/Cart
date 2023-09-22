import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderdisplayComponent } from './component/orderdisplay/orderdisplay.component';
import { FilterPipe } from './shared/filter.pipe';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ViewordersComponent } from './component/vieworders/vieworders.component';
import { HomeComponent } from './home/home.component';
import { AddProductFormComponent } from './component/add-product-form/add-product-form.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    CheckoutComponent,
    OrderdisplayComponent,
    FilterPipe,
    NotfoundComponent,
    ViewordersComponent,
    HomeComponent,
    AddProductFormComponent,
    RegisterComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
