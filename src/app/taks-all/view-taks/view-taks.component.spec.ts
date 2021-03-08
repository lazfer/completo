import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaksComponent } from './view-taks.component';

describe('ViewTaksComponent', () => {
  let component: ViewTaksComponent;
  let fixture: ComponentFixture<ViewTaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTaksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
