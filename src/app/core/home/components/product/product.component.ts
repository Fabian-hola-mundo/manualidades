import { Component, OnInit } from '@angular/core';
import { ProducSelectedService } from 'src/app/services/produc-selected.service';
import { GetFakeProductsService } from 'src/app/services/get-fake-products.service';
import { Product } from 'src/app/interfaces/products';
import { MatDialog } from '@angular/material/dialog';
import { ViewImagesComponent } from './view-images/view-images.component';
import { ImageSelectedService } from './image-selected.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product!: Product
  imageSelected!: Product
  widthScreen! : number
  dc!: object

  constructor(
    public producSelect: ProducSelectedService,
    public fakeService: GetFakeProductsService,
    public imageSelectedService: ImageSelectedService,
    public dialog: MatDialog
  ){

  }

  ngOnInit(): void {
    this.product = this.fakeService.getProduct()
    console.log(this.product);
    this.widthScreen = window.innerWidth;
    console.log(this.widthScreen);

    if(window.innerWidth < 1007) {
      this.dc = {
        position: {
          bottom: '0'
        }
      }
    } else {
      return
    }
  }

  onOpenImage(i: number){
    this.dialog.open(ViewImagesComponent, this.dc)
    this.setIndexImageSelected(i)
  }

  setIndexImageSelected(i: number){
    this.imageSelectedService.getIndexImageSelected(i)
    console.log(i);

  }

}
