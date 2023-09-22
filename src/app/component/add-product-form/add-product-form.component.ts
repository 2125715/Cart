import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {
  
  title='';
  price=100;
  description='';
  category='';
  quantity=1;
  image='';
  formData:any={};


  constructor( private api: ApiService) {

  }
  onSubmit() {
    console.log('Formdata',this.formData);
    
    this.api.addProduct(this.formData).subscribe(
      (res) => {
        window.alert('Product added successfully:');
      },
      (err) => {
        window.alert("Error Adding Product");
      }
    );
  }

  ngOnInit(): void {
  }

}
