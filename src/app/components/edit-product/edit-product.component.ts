import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventDrivingService} from "../../services/event-driving.service";
import {ProductsActionsTypes} from "../../State/product.State";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public productId!:number;
  public productFormGroup!:FormGroup;
  public submitted:boolean=false;

  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductsService,
              private fb:FormBuilder,
              private router:Router,
              private eventDrivingService:EventDrivingService) {
    this.productId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId)
      .subscribe(product=>{
       this.productFormGroup = this.fb.group({
          id:[product.id,Validators.required],
          name:[product.name,Validators.required],
          price:[product.price,Validators.required],
          quantity:[product.quantity,Validators.required],
          selected:[product.selected,Validators.required],
          available:[product.available,Validators.required]
        })
      });
  }

  onUpdateProduct() {
    this.submitted = true;
    this.productService.updateProduct(this.productFormGroup.value)
      .subscribe(data=>{
        this.eventDrivingService.publishEvent({type:ProductsActionsTypes.PRODUCTS_UPDATED});
        alert("PRODUCT SUCCESSFULLY UPDATED !");
        this.router.navigateByUrl("/products")
      });
  }
}
