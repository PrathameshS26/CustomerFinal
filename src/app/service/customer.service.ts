import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Icustomer } from "../model/customer.model";
import { PostalFeed } from "../model/postalFeed.model";


@Injectable()
export class CustomerService {

    constructor(private httpClient: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    
    private base_url: string = "http://localhost:8888/customers"

    public getAllCustomer(): Observable<Icustomer[]> {
        return this.httpClient.get<Icustomer[]>(this.base_url, this.httpOptions).pipe(tap(data => console.log(data)));
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

  findAllPostals(): Observable<PostalFeed[]>{
    console.log("******findAllpostals from service is called*******")
		return this.httpClient.get('http://localhost:8888/customers/postals')
			.pipe(
				map(res => res['postalCode'])
			);
	}

  doesPostalExist(postal: number): Observable<boolean> {
    console.log("does Postal service method is called " + postal)
    let url = `${this.base_url}/postalcheck`;

    let content: any = {};
    content.postalCode = postal;

    let response$: Observable<boolean> = this.httpClient.post<boolean>(url, content);

    return response$;
  }
  // getPostalcode(postalCode):Observable<any[]>{
  //   const url = `${this.base_url}/postals`;
  //   console.log("********getPostalCode called from service**********");
  //   console.log(url);
  //   return this.httpClient.get<any[]>(url, this.httpOptions);
  // }
}