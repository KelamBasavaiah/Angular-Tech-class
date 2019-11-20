import {Movie} from "../models/movie.model";
import { element } from 'protractor';

export class ModelService{
    movies:Movie[];
    constructor()
    {
        this.movies=
        [
            new Movie("M001","Kaidhi",140.2,3,"assets/M001.jpg"),
            new Movie("M002","Bigili",157.2,3,"assets/M002.jpg")
        ];
    }
    getMovie(mid:string):Movie
    {
        var movie:Movie=null;
        for(var i=0;i<this.movies.length;i++)
        {
            if(this.movies[i].id==mid)
            {
                movie=this.movies[i];
                break;
            }
        }
        return movie;
    }
      addMovie(movie:Movie):boolean
      {
      var added:boolean=true;
     this.movies.forEach(element=>{
         if(element.id==movie.id)
         added=false;
     });
          if(added==true)
             this.movies.push(movie);
      return added;

      }
  getMovies():Movie[]
  {
      return this.movies;
  }

}
