import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoenteFilho } from './compoente-filho';

describe('CompoenteFilho', () => {
  let component: CompoenteFilho;
  let fixture: ComponentFixture<CompoenteFilho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoenteFilho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoenteFilho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
