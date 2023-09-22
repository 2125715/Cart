import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, reduce } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
export class products {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public description: string,
    public category: string,
    public quantity: number,
    public image: string
  ) { }
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  @Input()
  username!: string;

  public productList: any;
  public filterCategory: any;
  searchKey: string = '';
  constructor(private api: ApiService, private cartService: CartService, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      //console.log(this.filterCategory);
      this.productList.forEach((a: any) => {
        if (a.category === "men's clothing") {
          a.category = "men"
        }
        if (a.category === "women's clothing") {
          a.category = "women"
        }
        if (a.category === "mobiles") {
          a.category = "electronics"
        }
        Object.assign(a, { total: a.price });
      });
    });
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })

  }


  addtocart(item: any) {
    this.cartService.addtoCart (item);
    item.addedToCart = true;
  }
  goToCart(): void {
    this.router.navigate(['/cart']);

  }
 
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    })
  }
}
















//this.getProducts();https://localhost:7050/Api/Products https://localhost:7181/api/Product
 // // this.http.get<any>('https://localhost:7050/Api/Products').subscribe(
    // //   (response) => {
    // //     this.productList = response;
    // //   }

    // );
    //console.log(this.productList)
    // this.api.getproducts()
    //   .subscribe(
    //     (res) => {
    //       this.productList = res;
    //     });
    //     /* this.productList.forEach((a: any) => {
    //        Object.assign(a, {total: a.price });
    //      });*/
    //   })