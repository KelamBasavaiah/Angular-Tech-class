import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/movie.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
movies:Movie[];
totalLikes:number=0;
  constructor(private modelservices:ModelService) {
    this.movies=this.modelservices.getMovies();
   }
handleLike(){
  this.totalLikes=this.totalLikes+1;
}
  ngOnInit() {
  }

}
