import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOperations } from './all-operations';

describe('AllOperations', () => {
  let component: AllOperations;
  let fixture: ComponentFixture<AllOperations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllOperations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOperations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
