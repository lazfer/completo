import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanicoComponent } from './panico.component';

describe('PanicoComponent', () => {
  let component: PanicoComponent;
  let fixture: ComponentFixture<PanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
