import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit{
  title = 'app';
  items: MenuItem[];
  ngOnInit(){
    this.items = [
      {label: 'Home', icon: 'fa fa-fw fa-calender', routerLink: ['/home']},
      {label: 'About', icon: 'fa fa-fw fa-book', routerLink: ['/about']},
      {label: 'Blog', icon: 'fa fa-fw fa-calender', routerLink: ['/blog']}
    ];
  }
}
