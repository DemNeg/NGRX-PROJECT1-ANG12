import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../model/product.model";
import {ActionEvent, ProductsActionsTypes} from "../../../../State/product.State";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() product!:Product;
  @Output() eventEmitter:EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.eventEmitter.emit({type:ProductsActionsTypes.SELECT_PRODUCTS,payload:product})
  }

  onDeleteProduct(product: Product) {
    this.eventEmitter.emit({type:ProductsActionsTypes.DELETE_PRODUCTS,payload:product})
  }

  onEditProduct(product: Product) {
    this.eventEmitter.emit({type:ProductsActionsTypes.EDIT_PRODUCTS,payload:product})
  }
}
