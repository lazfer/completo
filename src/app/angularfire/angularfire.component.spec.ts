import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularfireComponent } from './angularfire.component';

describe('AngularfireComponent', () => {
  let component: AngularfireComponent;
  let fixture: ComponentFixture<AngularfireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularfireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularfireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
