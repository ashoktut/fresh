import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  // initializing empty object of category
  @Input() categories: any;
  constructor() { }

  ngOnInit() {
    this.categories = [ // category object and its attributes
      {
          uid: 'omburo',
          cover: 'assets/images/categories/vegan.jpg',
          name: 'Vegan',
          shortName: 'veg',
          cuisines: [ // cusines array
            'Vegan'
          ],
          rating: 5,
          deliveryTime: 25,
          distance: 2.5,
          price: 100
      },
      {
        uid: 'sdu8fdf',
        cover: 'assets/images/categories/chicken1.jpg',
        name: 'Chicken',
        shortName: 'chi',
        cuisines: [ // cusines array
          'Chicken'
        ],
        rating: 5,
        deliveryTime: 25,
        distance: 2.5,
        price: 100
      },

      {
        uid: 'jfl8f',
        cover: 'assets/images/categories/beef2.jpg',
        name: 'Beef',
        shortName: 'beef',
        cuisines: [ // cusines array
          'Beef'
        ],
        rating: 5,
        deliveryTime: 25,
        distance: 2.5,
        price: 100
      },

      {
        uid: 'nkojoro',
        cover: 'assets/images/categories/snacks3.jpg',
        name: 'Snacks',
        shortName: 'snacks',
        cuisines: [ // cusines array
          'Snacks'
        ],
        rating: 5,
        deliveryTime: 25,
        distance: 2.5,
        price: 100
      },

      {
        uid: 'nwefvi',
        cover: 'assets/images/categories/extras2.jpg',
        name: 'Extras',
        shortName: 'extras',
        cuisines: [ // cusines array
          'Extras'
        ],
        rating: 5,
        deliveryTime: 25,
        distance: 2.5,
        price: 100
      },

      {
        uid: 'ujala',
        cover: 'assets/images/categories/drinks1.jpg',
        name: 'Drinks',
        shortName: 'drinks',
        cuisines: [ // cusines array
          'Beverages'
        ],
        rating: 5,
        deliveryTime: 25,
        distance: 2.5,
        price: 100
      },
    ];
  }

  // function to join array and converting it to a string
  getCuisine(cuisine) {
    return cuisine.join(', ');
  }

}
