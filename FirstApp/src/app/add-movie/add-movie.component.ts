import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/movie.service';
import { Movie } from '../models/movie.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { IdValidation } from './idValidation';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
movie:Movie;
result:string;
myForm:FormGroup;
  constructor(private modelService:ModelService) { 
    this.movie=new Movie();
    this.myForm=new FormGroup({
      movieId:new FormControl(null,[Validators.required,
        //Validators.pattern("[M][0-9][0-9][0-9]"),
        IdValidation.cheakId]),
      movieName:new FormControl()
    });

  }
  
  public get movieId() {
    return this.myForm.get("movieId");
  }
  createMovie(){
    if(this.myForm.valid)
    {
      this.movie.id=this.movieId.value;
      if(this.modelService.addMovie(this.movie)) 
         this.result="Movie added";
      else
        this.result="Some error";
      this.movie=new Movie();
    }
  }
  

  insertMovie(){
   if(this.modelService.addMovie(this.movie)) 
     this.result="Movie added";
   else
     this.result="Some error";
   this.movie=new Movie();
  }

  restMovie(){
    this.movie=new Movie(); 
  }
  ngOnInit() {
  }

}
