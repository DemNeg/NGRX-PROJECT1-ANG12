import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product.model";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {AppDataState, DataStateEnum} from "../../State/product.State";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //public products?: Product[];
  public products$:Observable<AppDataState<Product[]>>|null=null;
  public readonly DataStateEnum=DataStateEnum;

  constructor(private productService:ProductsService,private router:Router) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    /*this.productService.getAllProduct().subscribe(data=>{
      this.products = data;
    },err=>{
      console.log(err)
    })*/

    //Appel au service avec la gestion des erreurs en utilisant un pipe

    this.products$=this.productService.getAllProduct()
      .pipe(
        map(data=>({
          dataState:DataStateEnum.LOADED,
          data:data
        })),
        startWith({
          dataState:DataStateEnum.LOADING
        }),
        catchError(err=>of({
          dataState:DataStateEnum.ERROR,
          errorMessage:err.errorMessage
        }))
      );
  }

  onGetSelectedProducts() {
    this.products$=this.productService.getSelectedProduct()
      .pipe(
        map(data=>({
          dataState:DataStateEnum.LOADED,
          data:data
        })),
        startWith({
          dataState:DataStateEnum.LOADING
        }),
        catchError(err=>of({
          dataState:DataStateEnum.ERROR,
          errorMessage:err.errorMessage
        }))
      );

  }

  onGetAvailableProducts() {
    this.products$=this.productService.getAvailableProduct()
      .pipe(
        map(data=>({
          dataState:DataStateEnum.LOADED,
          data:data
        })),
        startWith({
          dataState:DataStateEnum.LOADING
        }),
        catchError(err=>of({
          dataState:DataStateEnum.ERROR,
          errorMessage:err.errorMessage
        }))
      );

  }

  onSearch(dataForm: any) {
    this.products$=this.productService.searchProduct(dataForm.keyword)
      .pipe(
        map(data=>({
          dataState:DataStateEnum.LOADED,
          data:data
        })),
        startWith({
          dataState:DataStateEnum.LOADING
        }),
        catchError(err=>of({
          dataState:DataStateEnum.ERROR,
          errorMessage:err.errorMessage
        }))
      );
  }

  onSelect(p: Product) {
    this.productService.select(p)
      .subscribe(data=>{
        p.selected=data.selected;
      })

  }

  onDeleteProduct(p: Product) {
    let v=confirm("Product will deleted !, sure?")
    this.productService.deleteProduct(p)
      .subscribe(data=>{
        this.onGetAllProducts()
      })
  }

  onNewProduct() {
    this.router.navigateByUrl("/newProduct")
  }

  onEditProduct(p: Product) {
    this.router.navigateByUrl("/editProduct/"+p.id)
  }
}
