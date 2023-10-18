import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { DataModel } from '../models/forms.model';

@Component({
  selector: 'app-upload-products',
  templateUrl: './upload-products.component.html',
  styleUrls: ['./upload-products.component.scss']
})
export class UploadProductsComponent {

  firstData! : DataModel[]

  formulario!: any;

products = {}

  constructor(
    private productService: ProductsService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      image: new FormArray([]),
      place: new FormControl(),
      stateOfProduct: new FormControl()
    })
  }

  get imageArray() {
    return this.formulario.get('images') as FormArray;
  }

  agregarImagen() {
    this.imageArray.push(this.formBuilder.control(''));
  }

  eliminarImagen(index: number) {
    this.imageArray.removeAt(index);
  }

  ngOnInit(): void {
    this.createFirstStep()
  }

  onSubmit() {
    console.log(this.formulario.value);
    const response =  this.productService.addProduct(this.formulario.value)
    console.log(response);
  }

  createFirstStep() {
    this.firstData = [
      {
        input: 'input',
        label: 'Título',
        type: 'text',
        placeholder: 'Guitarra Mela',
        formControlName: 'title',
        required: true
      },
      {
        input: 'textarea',
        label: 'Descripción',
        type: 'text',
        placeholder: 'Guitarra Mela',
        formControlName: 'description',
        required: true
      },
      {
        input: 'input',
        label: 'Precio',
        type: 'number',
        placeholder: '25000',
        formControlName: 'price',
        required: true
      },
    ]
  }

}
