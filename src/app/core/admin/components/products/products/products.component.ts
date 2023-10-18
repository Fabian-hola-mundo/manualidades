import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/interfaces/products';
import { GetFakeProductsService } from 'src/app/services/get-fake-products.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: any | Product[] = [];
  dataSource : any;

  constructor(
    private fakeProducts: GetFakeProductsService
  ) {

  }

  ngOnInit(): void {
    this.fakeProducts.getAllProducts().subscribe((data) => {
      this.products = data;
      this.dataSource = new MatTableDataSource(this.products)
    });

  }
  displayedColumns: string[] = ['title', 'description', 'price'];

  headerText = "Test Title";


  mode = new FormControl('side' as MatDrawerMode);
  hasBackdrop = new FormControl(true as null | boolean);
  position = new FormControl('end' as 'start' | 'end');
}
