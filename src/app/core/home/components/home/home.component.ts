import { Component, HostListener, OnInit } from '@angular/core';
import { ProducSelectedService } from 'src/app/services/produc-selected.service';
import {
  MatBottomSheet,
  MatBottomSheetConfig,
} from '@angular/material/bottom-sheet';
import { ProductComponent } from '../product/product.component';
import { GetFakeProductsService } from 'src/app/services/get-fake-products.service';
import { Product } from 'src/app/interfaces/products';
import { getFirestore } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { provideFirestore } from '@angular/fire/firestore';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any | Product[] = [];
  productsFirebase: any | Product[] = [];
  fakeProductsList: object = [];
  isActive = false;
  screenWidth!: number;
  sideBottomSheet = '';
  dc: MatBottomSheetConfig = {
    panelClass: '',
  };



  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.setBottomDirection();
  }

  constructor(
    private _bottomSheet: MatBottomSheet,
    private fakeProducts: GetFakeProductsService,
    private getFirebase: ProductsService
  ) {


  }

  ngOnInit(): void {
/*     this.fakeProducts.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    }); */
    this.screenWidth = window.innerWidth;
    this.setBottomDirection();
    this.getFirebase.getProduct().subscribe((data) => {
      this.productsFirebase = data
      console.log(provideFirestore);
    })
    this.getFirebase.simpleLog()

  }

  setBottomDirection() {
    if (this.screenWidth >= 1007) {
      this.dc = {
        panelClass: 'rightSide',
      };
    } else {
      return;
    }
  }

  onSelect(product: Product) {
    // this.productSelect.establecerDatos(product);
    this.fakeProducts.getSelectedProduct(product);
    console.log(product);
    this._bottomSheet.open(ProductComponent, this.dc);
  }
}
