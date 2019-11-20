import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{Route,RouterModule} from "@angular/router";
import{HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { StudentComponent } from './student/student.component';
import { StudentService } from './services/student.service';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { ModelService } from './services/movie.service';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { bookService } from './services/book.services';
import { AddBookComponent } from './add-book/add-book.component';
import { FloraService } from './services/flora.service';
import { FloraComponent } from './flora/flora.component';
import { FlorasComponent } from './floras/floras.component';
import { BuyFloraComponent } from './buy-flora/buy-flora.component';
import { OrdersComponent } from './orders/orders.component';
import { DefaultComponent } from './default/default.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { UserComponent } from './user/user.component';
import { from } from 'rxjs';
import { UserService } from './services/user.service';




const myRoutes:Route[]=[{path:'books',component:BooksComponent,children:[
                                                                         {path:"movies",component:MoviesComponent}
                                                                          ]},
                        {path:'movies',component:MoviesComponent},
                        {path:'addBook',component:AddBookComponent},
                        {path:'addMovie',component:AddMovieComponent},
                        {path:'listMovies',component:MovieListComponent,children:[
                          {path:'movie/:pmid',component:MovieComponent}
                        ]},
                        {path:'user',component:UserComponent},
                        {path:'**',component:DefaultComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    MoviesComponent,
    MovieComponent,
    AddMovieComponent,
    BookComponent,
    BooksComponent,
    AddBookComponent,
    FloraComponent,
    FlorasComponent,
    BuyFloraComponent,
    OrdersComponent,
    DefaultComponent,
    MovieListComponent,
    UserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),HttpClientModule
  ],
  providers: [EmployeeService,StudentService,ModelService,bookService,FloraService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
