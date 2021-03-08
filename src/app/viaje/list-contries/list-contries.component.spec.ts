import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContriesComponent } from './list-contries.component';

describe('ListContriesComponent', () => {
  let component: ListContriesComponent;
  let fixture: ComponentFixture<ListContriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
