import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModelService } from '../services/movie.service';
import { Movie } from '../models/movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
 @Input() movie:Movie;
 @Output() likeCicked:EventEmitter<number>;

 constructor(private modelservices:ModelService,private myActiveRoute:ActivatedRoute) { 
   // this.movie = this.modelservices.getMovie("M001");
   this.likeCicked= new EventEmitter();
  }

userClick(){
this.likeCicked.emit(1);
}

  ngOnInit() {
   // console.log("pmid");
    
    if  (!this.movie){
      var movieId;
      this.myActiveRoute.params.subscribe(p=>{
        movieId=p["pmid"];
        this.movie=this.modelservices.getMovie(movieId);
      });
      
    }
  }

}
