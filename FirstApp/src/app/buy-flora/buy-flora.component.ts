import { Component, OnInit, EventEmitter } from '@angular/core';
import { FloraService } from '../services/flora.service';
import { Flora } from '../models/flora.model';

@Component({
  selector: 'app-buy-flora',
  templateUrl: './buy-flora.component.html',
  styleUrls: ['./buy-flora.component.css']
})
export class BuyFloraComponent implements OnInit {
floras:Flora[];
flora:Flora;
totalAmount:number=0;

  constructor(private floraServices:FloraService) { 
    this.floras=this.floraServices.getFloras();
  
    
  }
  // buyClick(){
  //   this.flora.qty=this.flora.qty-1;
  //   this.totalAmount=this.totalAmount+this.flora.price;
  //  // this.flora=new Flora;
  // }
  caluclateTotal(amount){
    this.totalAmount+=amount;
    }

  ngOnInit() {
  }

}
