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

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.homeService.getProducts().subscribe((result: any) => {
      this.products = result.data.data;
      console.log(this.products)
      this.next_page = result.data.next_page_url;
      this.prev_page = result.data.prev_page_url;
    })
  }

}
