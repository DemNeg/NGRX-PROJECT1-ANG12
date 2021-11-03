import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  public getAllProduct():Observable<Product[]>{
    let host =environment.host;
    return this.httpClient.get<Product[]>(host+"/products")
  }
  public getSelectedProduct():Observable<Product[]>{
    let host = environment.host;
    return this.httpClient.get<Product[]>(host+"/products?selected=true")
  }
  public getAvailableProduct():Observable<Product[]>{
    let host = environment.host;
    return this.httpClient.get<Product[]>(host+"/products?available=true")
  }

  public searchProduct(keyword:string):Observable<Product[]>{
    let host =environment.host;
    return this.httpClient.get<Product[]>(host+"/products?name_like="+keyword)
  }
  public select(product:Product):Observable<Product>{
    let host =environment.host;
    product.selected=!product.selected;
    return this.httpClient.put<Product>(host+"/products/"+product.id,product);
  }
  public deleteProduct(product:Product):Observable<void>{
    let host =environment.host;
    return this.httpClient.delete<void>(host+"/products/"+product.id);
  }

  public saveProduct(product:Product):Observable<Product>{
    let host =environment.host;
    return this.httpClient.post<Product>(host+"/products",product);
  }
  public getProduct(id:number):Observable<Product>{
    let host = environment.host;
    return this.httpClient.get<Product>(host+"/products/"+id);
  }

  public updateProduct(product:Product):Observable<Product>{
    let host = environment.host;
    return this.httpClient.put<Product>(host+"/products/"+product.id,product);
  }
}
