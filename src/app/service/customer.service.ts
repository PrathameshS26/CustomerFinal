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

    public getCustomerbyId(cid: number): Observable<Icustomer> {
      // return customers.find(Icustomer=>Icustomer.id===cid);
      // let url2: string = "http://localhost:8888/customers/customer"
      // const url = `${url2}/${cid}`;
      console.log("get by id is called");
      const url = `${this.base_url}/customer/${cid}`;
      console.log(cid);
      console.log('get customer by id waaala' + url);
      return this.httpClient.get<Icustomer>(url);
  
    }

    public deleteCustomer(id: number): Observable<any> {
        const url = `${this.base_url}/customer/${id}`;
        return this.httpClient.delete<any>(url);
    }

    // public addCustomer(newCustomer):Observable<Icustomer>
    // {
    //   const url = `${this.base_url}/customer`;
    //   //let url3: string = "http://localhost:8888/customers/customer"
    //   return this.httpClient.post<Icustomer>(url, newCustomer, this.httpOptions);
    // }
    public addCustomer(newCustomer): Observable<Icustomer> {
      console.log("addCustomer in service is called");
      console.log(newCustomer);
      let url3: string = "http://localhost:8888/customers/customer"
      return this.httpClient.post<Icustomer>(url3, newCustomer, this.httpOptions);
  
      // const headers = { 'content-type': 'application/json'}  
      // const body=JSON.stringify(Icustomer);
      // console.log(body)
      // return this.httpClient.post<Icustomer>(url3 + 'customer', body,{'headers':headers})
    }

    
    public updateCustomer(newCustomer):Observable<Icustomer>
  {
    console.log("update customer is called");
    const url = `${this.base_url}/customer/${newCustomer.customerId}`;
    //let url3: string = "http://localhost:8888/customers/customer";
    //const url4 = `${url3}/${newCustomer.customerId}`;
    console.log("Update Method from service called and executed"+ newCustomer);
    return this.httpClient.put<Icustomer>(url, newCustomer, this.httpOptions);
  }

 
}