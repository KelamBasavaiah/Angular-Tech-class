import { Component, OnInit } from '@angular/core';
import { FloraService } from '../services/flora.service';
import { Flora } from '../models/flora.model';

@Component({
  selector: 'app-floras',
  templateUrl: './floras.component.html',
  styleUrls: ['./floras.component.css']
})
export class FlorasComponent implements OnInit {
floras:Flora[];
flora:Flora;
  constructor(private floraServices:FloraService) { 
    this.floras=this.floraServices.getFloras();
  }

  ngOnInit() {
  }

}
