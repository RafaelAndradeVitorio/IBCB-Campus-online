import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicionamentoComponent } from './posicionamento.component';

describe('PosicionamentoComponent', () => {
  let component: PosicionamentoComponent;
  let fixture: ComponentFixture<PosicionamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosicionamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosicionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
