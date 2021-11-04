import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductsActionsTypes} from "../../../State/product.State";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

 @Output() productEnventEmitter:EventEmitter<ActionEvent>= new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.productEnventEmitter.emit({type:ProductsActionsTypes.GET_ALL_PRODUCTS,payload:null})
  }

  onGetSelectedProducts() {
    this.productEnventEmitter.emit({type:ProductsActionsTypes.GET_SELECTED_PRODUCTS,payload:null})
  }

  onGetAvailableProducts() {
    this.productEnventEmitter.emit({type:ProductsActionsTypes.GET_AVAILABLE_PRODUCTS,payload:null})
  }

  onNewProduct() {
    this.productEnventEmitter.emit({type:ProductsActionsTypes.NEW_PRODUCTS})
  }

  onSearch(dataForm: any) {
    this.productEnventEmitter.emit({type:ProductsActionsTypes.SEARCH_PRODUCTS,payload:dataForm})
  }
}
