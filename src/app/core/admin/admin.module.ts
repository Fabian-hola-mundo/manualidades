import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { FirstStepComponent } from './components/products/create.product/first-step/first-step.component';
import { UploadProductsComponent } from './components/upload-products/upload-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LayoutComponent } from './layout/layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { AdminRoutingModule } from './admin.routing';
import { LoginComponent } from './components/login/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ProductsComponent } from './components/products/products/products.component';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { CreateProductComponent } from './components/products/create.product/create.product.component';
import { SecondStepComponent } from './components/products/create.product/second-step/second-step.component';
import { ThirdStepComponent } from './components/products/create.product/third-step/third-step.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { SeeProductComponent } from './components/products/products/see-product/see-product.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';


const MATERIALCDK = [
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MatRippleModule,
];

const MATERIALCOMPONENTS = [
  MatIconModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatTableModule,
  MatSidenavModule,
  MatRadioModule,
  MatDividerModule,
  MatMenuModule,
  MatChipsModule,
  MatCheckboxModule
];

const COMPONENTS = [
  FirstStepComponent,
  SecondStepComponent,
  ThirdStepComponent,
  UploadProductsComponent,
  LayoutComponent,
  HeaderComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    LoginComponent,
    SidebarComponent,
    ProductsComponent,
    CreateProductComponent,
    SeeProductComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    ...MATERIALCOMPONENTS,
    ...MATERIALCDK,
  ],
  providers: [],
})
export class adminModule {}
