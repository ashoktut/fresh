import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss'],
})
export class SpecialComponent implements OnInit {

  // Input for specials advertisements and slides per view
  @Input() specialsImages: any[];
  slideOptions = {
    slidesPerView: 1.2,
  };

  constructor() { }

  ngOnInit() {}

}
