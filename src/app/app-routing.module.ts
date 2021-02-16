import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardItemDetailsComponent } from './board-item-details/board-item-details.component';
import { BoardItemComponent } from './board-item/board-item.component';

const routes: Routes = [
  { path: '', component: BoardItemComponent },
  { path: 'boards/:boardId', component: BoardItemDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
