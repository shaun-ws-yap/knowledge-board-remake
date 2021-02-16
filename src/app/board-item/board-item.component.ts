import { Component, OnInit } from '@angular/core';

import { items } from './items';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit {
  items = items;

  constructor() { }

  ngOnInit() {
  }

}
