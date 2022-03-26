import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncInputComponent } from './func-input.component';

describe('FuncInputComponent', () => {
  let component: FuncInputComponent;
  let fixture: ComponentFixture<FuncInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
