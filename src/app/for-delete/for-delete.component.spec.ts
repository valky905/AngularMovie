import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDeleteComponent } from './for-delete.component';

describe('ForDeleteComponent', () => {
  let component: ForDeleteComponent;
  let fixture: ComponentFixture<ForDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
