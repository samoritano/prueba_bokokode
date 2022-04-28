import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Array<any> = []
  next_page: string = '';
  prev_page: string = '';
  categories: any[] = [
    { name: 'People', key: 'people' }, { name: 'Food', key: 'food' }, { name: 'Premium', key: 'premium' },
    { name: 'Pets', key: 'pets' }, { name: 'Landmarks', key: 'landmarks' }, { name: 'Cities', key: 'cities' }, { name: 'Nature', key: 'nature' }
  ];
  prices: any[] = [
    {name: 'Lower than 20€', key: 'lower'}, {name: '20€ - 100€', key: 'between20'}, {name: '100€ - 200€', key: 'between100'}, {name: 'More than 200€', key: 'more'}
  ]
  selectedCategories: any[] = [];
  selectedPrices: any[] = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.homeService.getProducts().subscribe((result: any) => {
      this.products = result.data.data;
      this.next_page = result.data.next_page_url;
      this.prev_page = result.data.prev_page_url;
    })
  }

  selectCategories() {
    this.getProducts();
    this.selectedCategories.forEach((element: any) => {
      this.products = this.products.filter(p => p.category === element)
    });
    if(this.selectedCategories.length === 0){
      this.getProducts()
    }
    console.log(this.products)
      

    
  }

  selectPrices(){

  }

}
