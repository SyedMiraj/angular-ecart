import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  product = {
    name: "iPhone 16+",
    price: 799,
    color: "Mat brown",
    discount: 10,
    inStock: 5
  }

  getDiscountedPrice(){
    return this.product.price - (this.product.price * 8.5/100);
  }
}
