import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],})


export class QuoteComponent implements OnInit {
 
  theQuotes=[new Quote("“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” ","Beatrice Sh","owner",new Date(2020,1,11))]
  

  deleteQuote(isComplete,index) {
    this.theQuotes.splice(index,1);
  }
  receiveQuote(get){
    get.timeCreated = new Date (get.timeCreated);
    this.theQuotes.push(get);
    console.log(this.theQuotes);
  }
  public count = 0;
// this is for upvote
  adding(index){
    this.theQuotes[index].votes = this.theQuotes[index].votes + 1;
    if (this.theQuotes[index].votes>this.count) {
      this.count=this.theQuotes[index].votes;
    }
    console.log(this.theQuotes[index].votes);
  }
  // this is for downvote
  removing(index){
    if(this.theQuotes[index].votes > 0){
      this.theQuotes[index].votes = this.theQuotes[index].votes - 1;
    } else this.theQuotes[index].votes = 0;
    console.log(this.theQuotes[index].votes);
  }

  constructor() { }

  ngOnInit() {
    
  }

}
