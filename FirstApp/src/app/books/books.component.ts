import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { bookService } from '../services/book.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Book[];
  book:Book;
  totalAmount:number=0;
  
  constructor( private BookServices:bookService,private myRoutes:Router) {
    this.books=this.BookServices.getBooks();
   
   }
   goToMovies(){
  this.myRoutes.navigateByUrl("books/movies");
   }
   handleBuy(){
    this.book.starRating-=1;
    this.book=new Book;
  }
  caluclateTotal(amount){

this.totalAmount+=amount;
  }

  ngOnInit() {
  }

}
