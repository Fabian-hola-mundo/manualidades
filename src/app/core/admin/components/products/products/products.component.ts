import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/interfaces/products';
import { GetFakeProductsService } from 'src/app/services/get-fake-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: any | Product[] = [];
  dataSource : any;
  clickedRows = new Set<Product>();

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

  selectedProductSide: boolean = false
  createdProductSide: boolean = false

  clearSides(){
    this.selectedProductSide = false
    this.createdProductSide = false
  }

  setProductOnRow(row: Product) {
    this.selectedProduct = row
    this.selectedProductSide = true
    console.log(row);
    console.log(row.title);
  }

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
  displayedColumns: string[] = ['id', 'title', 'description', 'price', 'category'];

  headerText = "Test Title";


  mode = new FormControl('over' as MatDrawerMode);
  hasBackdrop = new FormControl(true as null | boolean);
  position = new FormControl('end' as 'start' | 'end');
}
