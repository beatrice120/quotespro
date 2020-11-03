import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

 
  transform(value: number): any{
    let today:Date = new Date (); 
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(), today.getDate())
    var dateDifference= todayWithNoTime-value 
    const secondsInADay=86400; 

    var dateDifferenceSeconds=dateDifference*0.001; 

    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if (dateCounter >=1){
      return Math.round(dateCounter);
    }else{
      return 0;
    }

  }
  }


