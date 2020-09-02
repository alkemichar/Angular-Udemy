import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-assigment',
  templateUrl: './third-assigment.component.html',
  styleUrls: ['./third-assigment.component.css'],
  styles: [`
    .whiteColor {
        color: white;
    }
  `]
})
export class ThirdAssigmentComponent implements OnInit {
  paragraphVisible: boolean = false;
  clickLogger: {time: string, index: number}[] = [];
  clickCounter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }


  toggleVisibility() {
    this.paragraphVisible = !this.paragraphVisible;
    var time = new Date().toTimeString().split(" ")[0];  
    this.clickCounter++;  
    this.clickLogger.push(
      {
        time, 
        index: this.clickCounter
      }
    );
    console.log(this.clickLogger);    
  }

  getColor(timeObj: {time: string, index: number}) {
    if (timeObj.index > 4)
      return "blue";
  }

  isFifth(timeObj: {time: string, index: number}) {
    if (timeObj.index > 4)
      return true;
  }
}
