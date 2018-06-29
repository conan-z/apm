import { Component, OnInit } from '@angular/core';

import { Product } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  _filterText: string;
  imageWidth: number = 50;
  imageMargin: number = 2;
  isImageDisplayed: boolean = false;
  filteredProducts: Product[];
  products: Product[] = [
    {
      'productId': 1,
      'productName': 'Leaf Rake',
      'productCode': 'gdn-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    },
    {
      'productId': 2,
      'productName': 'Garden Cart',
      'productCode': 'gdn-0023',
      'releaseDate': 'March 18, 2016',
      'description': '15 gallon capacity rolling garden cart',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    },
    {
      'productId': 5,
      'productName': 'Hammer',
      'productCode': 'tbx-0048',
      'releaseDate': 'May 21, 2016',
      'description': 'Curved claw steel hammer',
      'price': 8.9,
      'starRating': 4.8,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
    },
    {
      'productId': 8,
      'productName': 'Saw',
      'productCode': 'tbx-0022',
      'releaseDate': 'May 15, 2016',
      'description': '15-inch steel blade hand saw',
      'price': 11.55,
      'starRating': 3.7,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
    },
    {
      'productId': 10,
      'productName': 'Video Game Controller',
      'productCode': 'gmg-0042',
      'releaseDate': 'October 15, 2015',
      'description': 'Standard two-button video game controller',
      'price': 35.95,
      'starRating': 4.6,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
  }

  get filterText(): string {
    return this._filterText;
  }

  set filterText(text: string) { // setters cannot have return types, not even "void"
    this._filterText = text;
    this.filteredProducts = this._filterText ? this.performFilter() : this.products;
  }

  ngOnInit(): void {
    console.log('Product list is initiated');
  }

  toggleImage(): void {
    this.isImageDisplayed = !this.isImageDisplayed;
  }

  private performFilter(): Product[] {
    const lowercase = this._filterText.toLocaleLowerCase();
    return this.products.filter((value: Product) => value.productName.toLocaleLowerCase().indexOf(lowercase) !== -1);
  }

  onRatingClicked(message: string): void {
    // The parameter here corresponds to the payload of the ratingClicked EventEmitter
    alert(message);
  }
}
