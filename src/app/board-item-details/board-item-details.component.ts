import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { items } from '../board-item/items';

@Component({
  selector: 'app-board-item-details',
  templateUrl: './board-item-details.component.html',
  styleUrls: ['./board-item-details.component.scss']
})
export class BoardItemDetailsComponent implements OnInit {
  item;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const boardIdFromRoute = Number(routeParams.get('boardId'));

    this.item = items.find(item => item.id === boardIdFromRoute);
  }

}
