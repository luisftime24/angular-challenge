import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [
    `
    .passenger-container {
      padding: 15px;
      border-radius: 10px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      margin-top: 20px;
    }
    `
  ]
})
export class ConfirmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
