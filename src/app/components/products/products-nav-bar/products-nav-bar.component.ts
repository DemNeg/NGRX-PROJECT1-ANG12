import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductsActionsTypes} from "../../../State/product.State";
import {EventDrivingService} from "../../../services/event-driving.service";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

 //@Output() productEnventEmitter:EventEmitter<ActionEvent>= new EventEmitter<any>();
  constructor(private eventDrivingService:EventDrivingService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    //this.productEnventEmitter.emit({type:ProductsActionsTypes.GET_ALL_PRODUCTS,payload:null})
  this.eventDrivingService.publishEvent({type:ProductsActionsTypes.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts() {
    //this.productEnventEmitter.emit({type:ProductsActionsTypes.GET_SELECTED_PRODUCTS,payload:null})
    this.eventDrivingService.publishEvent({type:ProductsActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onGetAvailableProducts() {
    //this.productEnventEmitter.emit({type:ProductsActionsTypes.GET_AVAILABLE_PRODUCTS,payload:null})
    this.eventDrivingService.publishEvent({type:ProductsActionsTypes.GET_AVAILABLE_PRODUCTS});
  }

  onNewProduct() {
    //this.productEnventEmitter.emit({type:ProductsActionsTypes.NEW_PRODUCTS})
    this.eventDrivingService.publishEvent({type:ProductsActionsTypes.NEW_PRODUCTS});
  }

  onSearch(dataForm: any) {
    //this.productEnventEmitter.emit({type:ProductsActionsTypes.SEARCH_PRODUCTS,payload:dataForm})
    this.eventDrivingService.publishEvent({type:ProductsActionsTypes.SEARCH_PRODUCTS,payload:dataForm});
  }
}
