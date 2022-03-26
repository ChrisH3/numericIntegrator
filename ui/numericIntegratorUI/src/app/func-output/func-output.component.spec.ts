import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncOutputComponent } from './func-output.component';

describe('FuncOutputComponent', () => {
  let component: FuncOutputComponent;
  let fixture: ComponentFixture<FuncOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
