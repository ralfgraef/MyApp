import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  amount: number;
  author:string;
  image: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  books: Book[] = [
    {
      name:  'clean code',
      amount: 30,
      author:  'robert c. martin',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg'
    },
    {
      name: 'pragmatic programmer',
      amount: 34,
      author: 'david thomas',
      image: 'https://m.media-amazon.com/images/P/B07VRS84D1.01._SCLZZZZZZZ_SX500_.jpg'
    }
  ]
  

  
  
  isShowing: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBooks(){
    this.isShowing = !this.isShowing;
  }

}
