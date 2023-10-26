import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/products';

const img = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'

@Component({
  selector: 'app-see-product',
  templateUrl: './see-product.component.html',
  styleUrls: ['./see-product.component.scss']
})
export class SeeProductComponent {


  burnImg = [
    img,
    img,
    img,
    img,
    img,
  ]

  @Input() product!: Product

  constructor() {

  }

}
