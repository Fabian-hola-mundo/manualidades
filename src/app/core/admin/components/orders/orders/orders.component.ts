import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/products';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  orders: any | Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'description', 'price', 'category'];
  side1: boolean = false



  clearSides() {
    this.side1 = false;
  }

  selectedProduct : Product  = {
    title: '',
    category: {
      id: '',
      name: '',
    },
    id: 0,
    description: '',
    price: 0,
    images: []
  }
  setProductOnRow(row: Product) {
    this.selectedProduct = row
    this.side1 = true
  }
}
