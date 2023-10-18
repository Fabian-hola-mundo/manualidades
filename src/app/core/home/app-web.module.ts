import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HomeRoutingModule } from './app-web.routing';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ViewImagesComponent } from './components/product/view-images/view-images.component';
import { TestComponent } from './components/test/test.component';
import {MatButtonModule} from '@angular/material/button';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';


const MATERIALCDK = [
  RouterModule,
]

const MATERIALCOMPONENTS = [
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatBottomSheetModule,
  MatDialogModule,
]

const COMPONENTS = [
  HomeComponent,
  ProductComponent,
  ViewImagesComponent,
  HeaderComponent,
  FooterComponent,
  LayoutComponent,
  TestComponent,

]

@NgModule({
  declarations: [
   ...COMPONENTS,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,

    ...MATERIALCOMPONENTS,
    ...MATERIALCDK,
  ],
  providers: [],
})
export class appWebModule { }
