import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { bookService } from '../services/book.services';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book:Book;
  result:string;
  constructor(private BookServices:bookService) { 
    this.book= new Book();
  }
  insertBook(bid){
    if(this.BookServices.addBook(this.book)) 
      this.result="Book added";
    else
      this.result="Some error";
      this.book= new Book();
   }
 
   restMovie(){
    this.book= new Book();
   }

  ngOnInit() {
  }

}
