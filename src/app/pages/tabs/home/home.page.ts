import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // declaring object variables empty
  specials: any[] = [];
  categories: any[] = [];

  constructor() { }

  ngOnInit() {

    this.specials = [
      {special: 'assets/images/specials/pexels1.jpg'},
      {special: 'assets/images/specials/pexels2.jpg'},
      {special: 'assets/images/specials/pexels3.jpg'},
    ];


  }
}
