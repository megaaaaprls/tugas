import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chat1Page } from './chat1.page';

describe('Chat1Page', () => {
  let component: Chat1Page;
  let fixture: ComponentFixture<Chat1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chat1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chat1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
