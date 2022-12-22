import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AconselhamentoComponent } from './aconselhamento.component';

describe('AconselhamentoComponent', () => {
  let component: AconselhamentoComponent;
  let fixture: ComponentFixture<AconselhamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AconselhamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AconselhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
