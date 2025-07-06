import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoentePai } from './compoente-pai';

describe('CompoentePai', () => {
  let component: CompoentePai;
  let fixture: ComponentFixture<CompoentePai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoentePai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoentePai);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
