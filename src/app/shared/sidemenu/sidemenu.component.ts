import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
