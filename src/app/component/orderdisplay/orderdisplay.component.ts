import { Component, OnInit, Input } from '@angular/core';
import { AddressData } from 'src/app/addressdata/address';

@Component({
  selector: 'app-orderdisplay',
  templateUrl: './orderdisplay.component.html',
  styleUrls: ['./orderdisplay.component.css']
})
export class OrderdisplayComponent implements OnInit {
  addressdata: AddressData = {
    name: "",
    address: "",
    pincode: "",
    mobile: ""

  }
  address: string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
