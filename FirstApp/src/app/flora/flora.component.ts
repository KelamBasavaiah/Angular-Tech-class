import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FloraService } from '../services/flora.service';
import { Flora } from '../models/flora.model';

@Component({
  selector: 'app-flora',
  templateUrl: './flora.component.html',
  styleUrls: ['./flora.component.css']
})
export class FloraComponent implements OnInit {
@Input() flora:Flora;
@Output() buyClicked:EventEmitter<number>;
  constructor(private floraService:FloraService) { 
    this.buyClicked= new EventEmitter();
  }
   userClick(){
    
     this.flora.qty=this.flora.qty-1;
     this.buyClicked.emit(this.flora.price);
     }
  ngOnInit() {
  }

}
