import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quotelayout } from './quotelayout';

describe('Quotelayout', () => {
  let component: Quotelayout;
  let fixture: ComponentFixture<Quotelayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quotelayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quotelayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
