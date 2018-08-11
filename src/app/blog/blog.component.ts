import { Component, OnInit } from '@angular/core';
import { slideToBottom } from '../shared/router.animations';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [slideToBottom()]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
