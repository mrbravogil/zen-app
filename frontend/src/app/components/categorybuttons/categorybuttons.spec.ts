import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorybuttons } from './categorybuttons';

describe('Categorybuttons', () => {
  let component: Categorybuttons;
  let fixture: ComponentFixture<Categorybuttons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorybuttons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorybuttons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
