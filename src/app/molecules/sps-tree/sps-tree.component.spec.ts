import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpsTreeComponent } from './sps-tree.component';

describe('SpsTreeComponent', () => {
  let component: SpsTreeComponent;
  let fixture: ComponentFixture<SpsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpsTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
