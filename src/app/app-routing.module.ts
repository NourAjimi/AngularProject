import { FormProductComponent } from './form-product/form-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'offres-emploi', component: OffresEmploiComponent },
  { path: 'add-product', component: FormProductComponent },
  { path: 'product/:id', component: DetailProductComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
