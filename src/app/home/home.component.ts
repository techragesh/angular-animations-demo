import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../shared/router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideToTop()],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
