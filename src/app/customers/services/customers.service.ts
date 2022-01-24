import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customers } from '../interfaces/customers.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(private http: HttpClient) {}

  getCustomers(id?: string): Observable<Customers[]> {
    return this.http
      .get<{ [id: string]: Customers }>(
        'https://fir-lerning-b4927-default-rtdb.firebaseio.com/cutomers.json'
      )
      .pipe(
        map((customers) => {
          let customerData: Customers[] = [];
          for (let id in customers) {
            customerData.push({ ...customers[id], id });
          }
          return customerData;
        })
      );
  }

  addCustomers(customer: Customers): Observable<Customers> {
    return this.http.post<Customers>(
      'https://fir-lerning-b4927-default-rtdb.firebaseio.com/cutomers.json',
      customer
    );
  }
}
