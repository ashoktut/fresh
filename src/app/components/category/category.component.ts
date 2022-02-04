import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  // initializing empty object of category
  @Input() category: any;
  constructor() { }

  ngOnInit() {}

  // function to join array and converting it to a string
  getCuisine(cuisine) {
    return cuisine.join(', ');
  }

}
