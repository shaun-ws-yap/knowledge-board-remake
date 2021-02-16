/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoardItemComponent } from './board-item.component';

describe('BoardItemComponent', () => {
  let component: BoardItemComponent;
  let fixture: ComponentFixture<BoardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
