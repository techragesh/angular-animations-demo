import { Component, OnInit, Input } from '@angular/core';
import { MenubarModule, MenuItem } from 'primeng/primeng';
@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  @Input() MenuData: MenuItem[];
  constructor() { }

  ngOnInit() {
  }

}
