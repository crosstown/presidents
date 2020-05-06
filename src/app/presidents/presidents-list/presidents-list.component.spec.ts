import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentsListComponent } from './presidents-list.component';

describe('PresidentsListComponent', () => {
  let component: PresidentsListComponent;
  let fixture: ComponentFixture<PresidentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
