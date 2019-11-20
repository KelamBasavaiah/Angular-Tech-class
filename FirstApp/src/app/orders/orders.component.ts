import { Component, OnInit } from '@angular/core';
import { FloraService } from '../services/flora.service';
import { Flora } from '../models/flora.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
floras:Flora[];
flora:Flora;
  constructor(private floraServices:FloraService) {
    this.floras=this.floraServices.getFloras();
   }

  ngOnInit() {
  }

}
