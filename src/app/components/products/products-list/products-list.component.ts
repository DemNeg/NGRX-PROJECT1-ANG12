import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductsActionsTypes} from "../../../State/product.State";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input()public productsInput$:Observable<AppDataState<Product[]>>|null=null;
  @Output() productsEventEmitter:EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>()
  public readonly DataStateEnum=DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(p: Product) {
    this.productsEventEmitter.emit({type:ProductsActionsTypes.SELECT_PRODUCTS,payload:p})
  }

  onDeleteProduct(p: Product) {
    this.productsEventEmitter.emit({type:ProductsActionsTypes.DELETE_PRODUCTS,payload:p})
  }

  onEditProduct(p: Product) {
    this.productsEventEmitter.emit({type:ProductsActionsTypes.EDIT_PRODUCTS,payload:p})
  }

  onActionEvent($event: ActionEvent) {
      this.productsEventEmitter.emit($event);
  }
}
