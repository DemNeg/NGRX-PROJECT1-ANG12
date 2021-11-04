import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ActionEvent} from "../State/product.State";

@Injectable({
  providedIn: 'root'
})
export class EventDrivingService {

  sourceEventSubject : Subject<ActionEvent> = new Subject<ActionEvent>();
  sourceEventSubjectObservable = this.sourceEventSubject.asObservable();


  constructor() { }

  publishEvent(event:ActionEvent){
    this.sourceEventSubject.next(event)  ;
  }
}
