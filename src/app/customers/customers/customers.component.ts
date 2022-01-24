import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customers } from '../interfaces/customers.interface';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit, OnChanges {
  customersData: Customers[] = [];
  customerSubscription!: Subscription;

  constructor(private customerService: CustomersService) {
    console.log('test constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('test on change ');
  }

  ngOnInit(): void {
    this.customerSubscription = this.customerService
      .getCustomers()
      .subscribe((data: Customers[]) => {
        this.customersData = data;
        // console.log(this.customersData);
      });
  }

  onDestroy() {
    this.customerSubscription && this.customerSubscription.unsubscribe();
  }
}
