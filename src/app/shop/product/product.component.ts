import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = ["Shoe", "Snacks", "Dress", "Diamond","Mobile"]
  constructor() { }

  ngOnInit() {
  }

  giftme = function(counter) {
    console.log("Buy me this!!"+this.products[counter]);
  }
}
