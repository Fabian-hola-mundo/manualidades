import { Component } from '@angular/core';
import { DataModel } from '../../models/forms.model';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create.product.component.html',
  styleUrls: ['./create.product.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class CreateProductComponent {

  formulario!: any;

  firstData!: DataModel[];
  secondData!: DataModel[];

  ngOnInit(): void {
    this.createFirstStep();
    this.createSecondStep()
  }

  constructor(
    private productService: ProductsService,
  ) {
    this.formulario = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
     // image: new FormArray([]),
     // place: new FormControl(),
     // stateOfProduct: new FormControl(),
    });
  }

  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.productService.addProduct(this.formulario.value)
    console.log(response);

  }


  createFirstStep() {
    this.firstData = [
      {
        input: 'input',
        label: 'Título',
        placeholder: 'Guitarra Mela',
        formControlName: 'title',
        required: true,
      },
      {
        input: 'textarea',
        label: 'Descripción',
        placeholder: 'Guitarra Mela',
        formControlName: 'description',
        required: true,
      },
      {
        input: 'input',
        label: 'Precio',
        type: 'number',
        placeholder: '25000',
        formControlName: 'price',
        required: true,
      },
    ];
  }

  createSecondStep() {
    this.secondData = [
      {
        label: 'image',
        input: 'input',
        formControlName: 'image',
      },
      {
        label: 'image',
        input: 'input',
        formControlName: 'image',
      },
      {
        label: 'image',
        input: 'input',
        formControlName: 'image',
      },
      {
        label: 'image',
        input: 'input',
        formControlName: 'image',
      },
    ];
  }

}
