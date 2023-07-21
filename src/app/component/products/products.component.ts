import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/product.model';
import { ApiService } from 'src/app/service/api.service';
import { cartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  public productList : any;
  constructor(private api:ApiService, private cartService : cartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res;
    })
  }

  addToCart( item :any){
   var newProduct  = new product(item.title,item.description, item.image,item.price)
    this.cartService.addItemToCart(newProduct);
    alert(this.cartService.getCartItems().length)
  }

}
