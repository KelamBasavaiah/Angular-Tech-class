import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { ModelService } from '../services/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
movies:Movie[];
  constructor(private movieService:ModelService,private myRoutes:Router) { 
    this.movies=this.movieService.getMovies();
  }
  showMovieDetalis(mid){
    this.myRoutes.navigate(['listMovies/movie',mid],{skipLocationChange:true});
  }

  ngOnInit() {
  }

}
