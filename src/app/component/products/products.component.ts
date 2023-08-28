import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
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

// export class Products {
//   id: number = 1;
//   title: string = '';
//   price: number = 0;
//   description: string = '';
//   category: string = '';
//   quantity: number = 0;
//   image: string = ''
// }


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  public productList: any;
  public filterCategory: any;
  searchKey: string = '';

  // product:any;
  // data1: any[] = [];
  //public Buttontext = "Add to cart";
  constructor(private api: ApiService, private cartService: CartService, private http: HttpClient) {
    // var data: any = this.getFakeProducts();
    // console.log("constructor data=", data);

  }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        if (a.category === "men's clothing") {
          a.category = "men"
        }
        if (a.category === "women's clothing") {
          a.category = "women"
        }
        if (a.category === "mobiles" ) {
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
    this.cartService.addtoCart(item);

  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    })
  }
  // async postProducts(data: any) {

  //   console.log("the data from inner method is", data);

  // }
  // InsertData() {
  //   var data = sessionStorage.getItem('Cache data');
  //   console.log(data);
  //   this.http.post('http://localhost:5135/Api/AddProduct', data);
  // }
  // getFakeProducts() {
  //   this.http.get<any[]>('https://fakestoreapi.com/products').subscribe(
  //     (response) => {
  //       response.forEach(element => {


  //       });
  //       sessionStorage.setItem('Cache data', JSON.stringify(response));
  //       return response;
  //     }
  //   )
  //   //   return this.http.get<Products>('https://fakestoreapi.com/products')
  //   //     .pipe(
  //   //       map((response) => {
  //   //         return response.id;
  //   //         // // return response.map(({
  //   //         // //   id, title, category, price, description, quantity, image
  //   //         // // }) => {
  //   //         // //   return {
  //   //         // //     id, title, category, price, description, quantity, image
  //   //         // //   };
  //   //         // });
  //   //       })
  //   //     )
  //   // }
  // }
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