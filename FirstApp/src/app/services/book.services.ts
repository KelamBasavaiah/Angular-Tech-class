import {Book} from "../models/book.model";
import { element } from 'protractor';

export class bookService{
    books:Book[];
    constructor()
    {
        this.books=
        [
            new Book("B001","Kaidhi",140,3,"assets/B001.jpg"),
            new Book("B002","Bigili",157,3,"assets/B002.jpg")
        ];
    }
    getBook(mid:string):Book
    {
        var movie:Book=null;
        for(var i=0;i<this.books.length;i++)
        {
            if(this.books[i].id=mid)
            {
                movie=this.books[i];
                break;
            }
        }
        return movie;
    }
      addBook(book:Book):boolean
      {
      var added:boolean=true;
     this.books.forEach(element=>{
         if(element.id==book.id)
         added=false;
     });
          if(added==true)
             this.books.push(book);
      return added;

      }
  getBooks():Book[]
  {
      return this.books;
  }

}
