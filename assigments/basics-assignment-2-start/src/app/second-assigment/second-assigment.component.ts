import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-assigment',
  templateUrl: './second-assigment.component.html',
  styleUrls: ['./second-assigment.component.css']
})
export class SecondAssigmentComponent implements OnInit {
  username : string = '';
  buttonDisabled: boolean = false;
  constructor() { 
    this.buttonDisabled = (this.username == '');
  }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.username = '';
  }
  onIsDisabled() {
    if (this.username == '') {
     return true;
    } else {
      return false;
    }
  }
}
