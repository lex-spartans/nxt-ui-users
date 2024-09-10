import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralLayoutComponent } from './lateral-layout.component';

describe('LateralLayoutComponent', () => {
  let component: LateralLayoutComponent;
  let fixture: ComponentFixture<LateralLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LateralLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
