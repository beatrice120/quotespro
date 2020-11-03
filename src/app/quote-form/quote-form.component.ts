import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  @Output() sendQuote = new EventEmitter<any>();
  
  
  newQuote= new Quote("","","",new Date());

  getQuotes(get){
    var sendingQuote
   
    sendingQuote = new Quote(get.value.quote,get.value.author,get.value.name,get.value.timeCreated)
    this.sendQuote.emit(sendingQuote);
    get.reset();
  }
  constructor() { }
 

  ngOnInit() {
  }

}
