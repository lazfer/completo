import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaksAllComponent } from './taks-all.component';

describe('TaksAllComponent', () => {
  let component: TaksAllComponent;
  let fixture: ComponentFixture<TaksAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaksAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaksAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
