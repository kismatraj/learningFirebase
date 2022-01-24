import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomersRoutingModule,
  ],
  exports: [CustomersComponent],
})
export class CustomersModule {}
