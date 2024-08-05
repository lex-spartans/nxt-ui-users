import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AppComponent', () => {
    expect(app).toBeTruthy();
  });

  it('should have title "Hello, Smarters!"', () => {
    app.init();
    expect(app.title).toEqual('Hello, Smarters!');
  });
});
