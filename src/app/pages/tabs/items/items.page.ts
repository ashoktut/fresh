import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  // @Input() category: any;
     id: any;
     data: any = {};
     items: any[] = [];
     veg = false;
    //  isLoading: boolean;
     cartData: any = {};
     storedData: any = {};
     model = {
      icon: 'fast-food-outline',
       title: 'No Menu Available'
    };

  categories = [ // category object and its attributes
    {
        uid: 'omburo',
        cover: 'assets/images/categories/vegan.jpg',
        name: 'Vegan',
        shortName: 'veg',
        cuisines: [ // cusines array
          'Vegan'
        ],
    },
    {
      uid: 'sdu8fdf',
      cover: 'assets/images/categories/chicken1.jpg',
      name: 'Chicken',
      shortName: 'chi',
      cuisines: [ // cusines array
        'Chicken'
      ],
    },

    {
      uid: 'jfl8f',
      cover: 'assets/images/categories/beef2.jpg',
      name: 'Beef',
      shortName: 'beef',
      cuisines: [ // cusines array
        'Beef'
      ],
    },

    {
      uid: 'nkojoro',
      cover: 'assets/images/categories/snacks3.jpg',
      name: 'Snacks',
      shortName: 'snacks',
      cuisines: [ // cusines array
        'Snacks'
      ],
    },

    {
      uid: 'nwefvi',
      cover: 'assets/images/categories/extras2.jpg',
      name: 'Extras',
      shortName: 'extras',
      cuisines: [ // cusines array
        'Extras'
      ],
    },

    {
      uid: 'ujala',
      cover: 'assets/images/categories/drinks1.jpg',
      name: 'Drinks',
      shortName: 'drinks',
      cuisines: [ // cusines array
        'Beverages'
      ],
    },
  ];

  category: any[] = [
    {
      id: 'veg',
      name: 'Vegan',
      uid: 'omburo'
    },
    {
      id: 'chi',
      name: 'Chicken',
      uid: 'sdu8fdf'
    },
    {
      id: 'bee',
      name: 'Beef',
      uid: 'jfl8f'
    },
    {
      id: 'sna',
      name: 'Snacks',
      uid: 'nkojoro'
    },
    {
      id: 'ext',
      name: 'Extras',
      uid: 'nwefvi'
    },
    {
      id: 'dri',
      name: 'Drinks',
      uid: 'ujala'
    },
  ];

  allItems = [
    {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        category_id: 'veg',
        cover: 'assets/images/categories/beef1.jpg',
        desc: 'Fresh Chips',
        id: 'i1',
        name: 'Chips',
        price: 20,
        rating: 4,
        status: true,
        uid: 'omburo',
        variation: false,
        veg: true
    },
    {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        category_id: 'veg',
        cover: 'assets/images/categories/beef2.jpg',
        desc: 'Great in taste',
        id: 'i2',
        name: 'Coleslaw Salad',
        price: 20,
        rating: 4,
        status: true,
        uid: 'omburo', // categories id
        variation: false,
        veg: true
    },
    {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        category_id: 'veg',
        cover: 'assets/images/categories/chicken1.jpg',
        desc: 'Great in taste',
        id: 'i3',
        name: 'Spicy Chakalaka',
        price: 20,
        rating: 4,
        status: true,
        uid: 'omburo',
        variation: false,
        veg: true
    },
    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      category_id: 'chi',
      cover: 'assets/images/categories/chicken2.jpg',
      desc: 'Grilled chicken with choice of pap or chips & 2 sides',
      id: 'i4',
      name: '1/2 Chicken, Pap + 2 Sides',
      price: 60,
      rating: 4,
      status: true,
      uid: 'sdu8fdf',
      variation: false,
      veg: false
  },
  {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    category_id: 'chi',
    cover: 'assets/images/categories/chicken2.jpg',
    desc: 'Grilled chicken with choice of pap or chips & 2 sides',
    id: 'i5',
    name: '1/4 Chicken, Pap + 2 Sides',
    price: 40,
    rating: 4,
    status: true,
    uid: 'sdu8fdf',
    variation: false,
    veg: false
  },
  {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    category_id: 'chi',
    cover: 'assets/images/categories/vegan.jpg',
    desc: 'Grilled wings & Chips',
    id: 'i6',
    name: '6 Wings + Chips',
    price: 45,
    rating: 4,
    status: true,
    uid: 'sdu8fdf',
    variation: false,
    veg: false
  },
  {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    category_id: 'bee',
    cover: 'assets/images/categories/beef2.jpg',
    desc: 'Grilled T-Bone Steak & Chips',
    id: 'i7',
    name: 'T-Bone + Chips',
    price: 50,
    rating: 4,
    status: true,
    uid: 'jfl8f',
    variation: false,
    veg: false
  },
  {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    category_id: 'bee',
    cover: 'assets/images/categories/snacks1.jpg',
    desc: 'Grilled T-Bone Steak & Chips',
    id: 'i8',
    name: 'T-Bone + Pap + 2 sides',
    price: 60,
    rating: 4,
    status: true,
    uid: 'jfl8f',
    variation: false,
    veg: false
  },
  {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    category_id: 'bee',
    cover: 'assets/images/categories/beef2.jpg',
    desc: '150g beef patty, cheese, secret sauce served with chips',
    id: 'i9',
    name: 'Beef Burger & Chips',
    price: 55,
    rating: 4,
    status: true,
    uid: 'jfl8f',
    variation: false,
    veg: false
  },
  {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    category_id: 'sna',
    cover: 'assets/images/categories/snacks2.jpg',
    desc: 'Simba chips 150g Assorted Flavours',
    id: 'i10',
    name: 'Simba Chips 150g',
    price: 15,
    rating: 4,
    status: true,
    uid: 'nkojoro',
    variation: false,
    veg: false
  },
  {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    category_id: 'sna',
    cover: 'assets/images/categories/snacks1.jpg',
    desc: 'Lays chips 150g Assorted Flavours',
    id: 'i11',
    name: 'Lays Chips 150g',
    price: 18,
    rating: 4,
    status: true,
    uid: 'nkojoro',
    variation: false,
    veg: false
  },
  {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    category_id: 'sna',
    cover: 'assets/images/categories/snacks3.jpg',
    desc: 'Cadburys Chocolate 55g',
    id: 'i12',
    name: 'Chocolate 55g',
    price: 14,
    rating: 4,
    status: true,
    uid: 'nkojoro',
    variation: false,
    veg: false
  },
  {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    category_id: 'ext',
    cover: 'assets/images/categories/snacks3.jpg',
    desc: 'Kit kat 55g',
    id: 'i13',
    name: 'Chocolate 55g',
    price: 14,
    rating: 4,
    status: true,
    uid: 'nwefvi',
    variation: false,
    veg: false
  },
  {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    category_id: 'dri',
    cover: 'assets/images/categories/drinks1.jpg',
    desc: '2Lt Coca Cola',
    id: 'i14',
    name: 'Drinks',
    price: 25,
    rating: 4,
    status: true,
    uid: 'ujala',
    variation: false,
    veg: false
  },
  // im on a call brbok u can continue the way i was doing above for the remaining caegory to b populated with itemsok
  ];

  constructor(private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(paramMap => {
    //   console.log('data: ', paramMap);
    //   if (!paramMap.has('uid')) {
    //     this.navCtrl.back();
    //     return;
    //   }
    //   this.id = paramMap.get('uid');
    //   console.log('id: ', this.id);
    //   this.getItems();
    // });
  }

  getCart() {
    return Storage.get({key: 'cart'});
  }

  async getItems() {
    // this.isLoading = true;
    this.data = {};
    this.cartData = {};
    this.storedData = {};
    setTimeout(async () => {
      const data: any = this.categories.filter(x => x.uid === this.id);
      this.data = data[0];
      this.categories = this.categories.filter(x => x.uid === this.id);
      this.items = this.allItems.filter(x => x.uid === this.id);
      console.log('category: ', this.data);
      const cart: any = await this.getCart();
      console.log('cart: ', cart);
      if(cart?.value) {
        this.storedData = JSON.parse(cart.value);
        console.log('storedData: ', this.storedData);

        if(this.id === this.storedData.categories.uid && this.allItems.length > 0) {
          this.allItems.forEach((element: any) => {
            this.storedData.items.forEach(ele => {
              if(element.id !== ele.id) {return;}
              element.quantity = ele.quantity;
            });
          });
        }
        this.cartData.totalItem = this.storedData.totalItem;
        this.cartData.totalPrice = this.storedData.totalPrice;
      }
        // this.isLoading = false;
    },);

  }


  vegOnly(event) {
    console.log(event.detail.checked);
    this.items = [];
    if(event.detail.checked === true) {this.items = this.allItems.filter(x => x.veg === true);}
    else {this.items = this.allItems;}
    console.log('items: ', this.items);
  }

  quantityPlus(index) {
    try {
      console.log(this.items[index]);
      if (!this.items[index].quantity || this.items[index].quantity === 0) {
        this.items[index].quantity = 1;
        this.calculate();
      } else {
        this.items[index].quantity += 1;
        this.calculate();
      }
    } catch (e) {
      console.log(e);
    }
  }

  quantityMinus(index) {
    if(this.items[index].quantity !== 0) {
      this.items[index].quantity -= 1;
    } else {
      this.items[index].quantity = 0;
    }
    this.calculate();
  }

  calculate() {
    console.log(this.items);
    this.cartData.items = [];
    const item = this.items.filter(x => x.quantity > 0); // picks only the selected food items by customer from the items list
    console.log('added item', item);
    this.cartData.items = item; //assigns the picked items to a variable called items in the cartData object
    this.cartData.totalPrice = 0;
    this.cartData.totalItem = 0;
    item.forEach(element => {
      this.cartData.totalItem += element.quantity;
      this.cartData.totalPrice += (parseFloat(element.price) * parseFloat(element.quantity));
    });
    this.cartData.totalPrice = parseFloat(this.cartData.totalPrice).toFixed(2);
    if(this.cartData.totalItem === 0) {
      this.cartData.totalItem = 0;
      this.cartData.totalPrice = 0;
    }
    console.log('cart: ', this.cartData);
  }

  saveToCart() {
    try {
      this.cartData.categories = {};
      this.cartData.categories = this.data;
      console.log('cartData', this.cartData);
      Storage.set({
        key: 'cart',
        value: JSON.stringify(this.cartData)
      });
    } catch (e) {
      console.log(e);
    }
  }

  async viewCart() {
    if(this.cartData.items && this.cartData.items.length > 0) {await this.saveToCart();}
    console.log('router url: ', this.router.url);
    this.router.navigate([this.router.url + '/cart']);
  }

  // this joins array converting it to a string
  // getCuisine(cuisine) {
  //   return cuisine.join(', ');
  // }

}
