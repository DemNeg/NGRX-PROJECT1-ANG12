import { Component, OnInit } from '@angular/core';
import {EventDrivingService} from "../../services/event-driving.service";
import {ActionEvent} from "../../State/product.State";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  counter:number=0;
  constructor(private eventDrivingService:EventDrivingService) { }

  ngOnInit(): void {
    this.eventDrivingService.sourceEventSubjectObservable.subscribe((actionEvent:ActionEvent)=>{
      ++this.counter;
    });
  }

}
