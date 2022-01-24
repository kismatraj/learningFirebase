import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers/customers.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
