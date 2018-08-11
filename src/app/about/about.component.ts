import { Component, OnInit } from '@angular/core';
import { slideToLeft } from '../shared/router.animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [slideToLeft()]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
