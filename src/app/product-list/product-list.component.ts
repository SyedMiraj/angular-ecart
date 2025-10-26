import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  addToCart: number = 0;

  product = {
    name: "iPhone 16+",
    price: 799,
    color: "Mat brown",
    discount: 10,
    inStock: 5,
    image: "/assets/images/iPhone.jpg"
  }

  getDiscountedPrice(){
    return this.product.price - (this.product.price * 8.5/100);
  }

  incrementValue(event: any){
    if(this.product.inStock>this.addToCart){
      this.addToCart++;
    }
  }

  decrementValue(event: any){
    if(this.addToCart > 0){
      this.addToCart--;
    }
  }
}
