import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';
import { AddressData } from 'src/app/addressdata/address';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input()
  username!: string;

  addressdata: AddressData = {
    name: "Ajay",
    doorno: "1-44-1",
    address: "Vijayawada",
    pincode: "521211",
    mobile: "98765432210"

  }

  public products: any = [];
  public totalItem: number = 0;
  public total: number = 0;
  public grandTotal: number = 0;
  public deliveryCharges: number = 99;
  public isdisabled: boolean = true;


  constructor(private cartservice: CartService) { }



  ngOnInit(): void {

    this.cartservice.getProducts()
      .subscribe(res => {
        this.grandTotal = this.cartservice.getTotalPrice();
      })
    this.cartservice.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
        if (this.totalItem == 0) {
          this.isdisabled = true;
        }
        else {
          this.isdisabled = false;
        }
      })

    this.total = this.grandTotal + this.deliveryCharges;
  }

  orderNow(data: any) {
    console.log(data);
  }
  addAddress() {
    window.alert("Address updated succesfully ..!")
  }



}
