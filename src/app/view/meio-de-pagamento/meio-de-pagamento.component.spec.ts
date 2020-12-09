import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeioDePagamentoComponent } from './meio-de-pagamento.component';

describe('MeioDePagamentoComponent', () => {
  let component: MeioDePagamentoComponent;
  let fixture: ComponentFixture<MeioDePagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeioDePagamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeioDePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
