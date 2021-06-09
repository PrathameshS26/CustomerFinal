import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Icustomer } from "../model/customer.model";


@Injectable()
export class CustomerService {

    constructor(private httpClient: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    
    private base_url: string = "http://localhost:8888/customers"

    public getAllCustomer(): Observable<Icustomer[]> {
        return this.httpClient.get<Icustomer[]>(this.base_url, this.httpOptions);
    }

    public deleteCustomer(id: number): Observable<any> {
        const url = `${this.base_url}/customer/${id}`;
        return this.httpClient.delete<any>(url);
      }
 
}