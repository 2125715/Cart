import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  username!: string;

  public totalItem: number = 0;
  public searchTerm: string = '';
  constructor(private cartservice: CartService,private api:ApiService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cartservice.search.next(this.searchTerm);
  }
  get totalCartItems():number{
    return this.cartservice.gettotalCartItems();
  }
  logout() {
   
      
    this.api.logout();
  
}

}
