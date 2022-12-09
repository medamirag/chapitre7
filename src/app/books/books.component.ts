import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  total: number = 0
  books: Book[] = [
    { author: "Nuar Alsadir", name: "Animal Joy", quantity: 10, img: "https://api.time.com/wp-content/uploads/2022/11/AnimalJoy.jpg?quality=85&w=600&h=600&crop=1" },
    { author: "Amy Odell", name: "Anna: The Biography", quantity: 10, img: "https://api.time.com/wp-content/uploads/2022/11/Anna.jpg?quality=85&w=600&h=600&crop=1" },
    { author: "R.F. Kuang", name: "Babel", quantity: 10, img: "https://api.time.com/wp-content/uploads/2022/11/Babel.jpg?quality=85&w=600&h=600&crop=1" },
    { author: "Jokha Alharthi", name: "Bitter Orange Tree", quantity: 10, img: "https://api.time.com/wp-content/uploads/2022/11/Babel.jpg?quality=85&w=600&h=600&crop=1" },
    { author: "Yiyun Li", name: "The Book of Goose", quantity: 10, img: "https://api.time.com/wp-content/uploads/2022/11/TheBookofGoose.jpg?quality=85&w=600&h=600&crop=1" },
    { author: "David Quammen", name: "Breathless", quantity: 10, img: "https://api.time.com/wp-content/uploads/2022/11/Breathless.jpg?quality=85&w=600&h=600&crop=1" },
    { author: "Taylor Jenkins Reid", name: "Carrie Soto Is Back", quantity: 10, img: "https://api.time.com/wp-content/uploads/2022/11/CarrieSotoisBack.jpg?quality=85&w=600&h=600&crop=1" },
    { author: "Oscar Hokeah", name: "Calling for a Blanket Dance", quantity: 10, img: "https://api.time.com/wp-content/uploads/2022/11/CallingforaBlanketDance.jpg?quality=85&w=600&h=600&crop=1" },
    { author: "Jennifer Egan", name: "The Candy House", quantity: 10, img: "https://api.time.com/wp-content/uploads/2022/11/TheCandyHouse.jpg?quality=85&w=600&h=600&crop=1" },

  ]
  constructor() { }
  incrementer(evenement:any){
    console.log(evenement);
    
    this.total++
  }
  ngOnInit(): void {
  }

}
