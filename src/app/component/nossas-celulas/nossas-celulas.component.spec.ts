import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossasCelulasComponent } from './nossas-celulas.component';

describe('NossasCelulasComponent', () => {
  let component: NossasCelulasComponent;
  let fixture: ComponentFixture<NossasCelulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NossasCelulasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NossasCelulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
