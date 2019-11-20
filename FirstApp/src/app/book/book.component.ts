import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { bookService } from '../services/book.services';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
@Input() book:Book;
@Output() buyClicked:EventEmitter<number>;

  constructor(private BookServices:bookService) {
    this.buyClicked= new EventEmitter();
   }
   userClick(){
    
    this.book.starRating=this.book.starRating-1;
    this.buyClicked.emit(this.book.pages);
    }
  ngOnInit() {
  }

}
