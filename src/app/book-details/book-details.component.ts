import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestScheduler } from 'rxjs/testing';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
@Input('author') auteur:string=""
@Input('title') titre:string=""
@Input('image') image:string=""
@Input('qte') quantite:number=0
@Output() achat=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  acheter(){
    this.quantite--
    this.achat.emit({nom:"test",valeur:10})
    localStorage.setItem('author',this.auteur)
    localStorage.setItem('qte',this.quantite+"")
    localStorage.setItem('title',this.titre+"")
    localStorage.clear()
  }

}
