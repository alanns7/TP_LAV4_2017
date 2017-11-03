import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoresMasListadoComponent } from './colores-mas-listado.component';

describe('ColoresMasListadoComponent', () => {
  let component: ColoresMasListadoComponent;
  let fixture: ComponentFixture<ColoresMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoresMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoresMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
