import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Array<any> = []
  total: number = 0;
  rows: number = 0;
  categories: any[] = [
    { name: 'People', key: 'people' }, { name: 'Food', key: 'food' }, { name: 'Premium', key: 'premium' },
    { name: 'Pets', key: 'pets' }, { name: 'Landmarks', key: 'landmarks' }, { name: 'Cities', key: 'cities' }, { name: 'Nature', key: 'nature' }
  ];
  prices: any[] = [
    { name: 'Lower than 20€', key: 'lower' }, { name: '20€ - 100€', key: 'between20' }, { name: '100€ - 200€', key: 'between100' }, { name: 'More than 200€', key: 'more' }
  ]
  selectedCategories: any[] = [];
  selectedPrices: any[] = [];
  filter: any = {
    sort: {
      key: '',
      type: ''
    },
    categories: []
  }
  productsInCart: Array<any> = []
  displayCart: boolean = false
  page: number = 1;

  constructor(
    private homeService: HomeService
  ) {
    this.productsInCart = JSON.parse(localStorage.getItem('products') || '[]')
   }


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.homeService.getProducts(this.page).then((result: any) => {
      this.products = result.data.data.data;
      this.total = result.data.data.total;
      this.rows = result.data.data.per_page;
    })
  }

  addToCart(product: any){
    this.productsInCart.push(product)
    localStorage.setItem('products', JSON.stringify(this.productsInCart));
  }
  clearProducts(){
    localStorage.removeItem('products');
    this.productsInCart = []
  }

  changePage(evt: any){
    this.page = evt.page + 1;
    this.getProducts();
  }

}
