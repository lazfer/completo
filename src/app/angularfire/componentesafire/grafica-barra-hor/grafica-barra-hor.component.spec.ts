import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaBarraHorComponent } from './grafica-barra-hor.component';

describe('GraficaBarraHorComponent', () => {
  let component: GraficaBarraHorComponent;
  let fixture: ComponentFixture<GraficaBarraHorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaBarraHorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaBarraHorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
