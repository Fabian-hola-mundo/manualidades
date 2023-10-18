import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout/layout.component";
import { LoginComponent } from "./components/login/login/login.component";
import { ProductsComponent } from "./components/products/products/products.component";

const routes: Routes = [
  {
    path: 'panel',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
        pathMatch: 'full',
      },
      { path: '', redirectTo: 'products', pathMatch: 'full' },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'prefix',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
