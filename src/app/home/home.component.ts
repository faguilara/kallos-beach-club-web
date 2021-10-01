import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  videoURL = 'https://www.youtube.com/embed/8tHuXsnaU18'
  
  constructor() { }

  ngOnInit(): void {
  }

}
