import { Component } from '@angular/core';
import { cartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[cartService]
})
export class AppComponent {
  title = 'cart';
}
