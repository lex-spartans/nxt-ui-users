import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from '../environments/environment';
import { GetJsonService } from '../services/get-json.service';
import { AppComponent } from './app.component';
import { ENV_CONFIG } from './shared/tokens/environments-config';

fdescribe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let getServiceSpy: jasmine.SpyObj<GetJsonService>;
  const getDataInfo = {
    getdata: () => of()
  }

  beforeEach(() => {
    getServiceSpy = jasmine.createSpyObj('GetJsonService', ['getdata']);
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: ENV_CONFIG,
          useValue: environment
        },
        { provide: GetJsonService,
          useValue: getDataInfo
        }
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AppComponent', () => {
    expect(app).toBeTruthy();
  });

  it('should have title "Hello, Smarters!"', () => {
    getServiceSpy.getdata.and.returnValue(of()); // Cambiado a 'of()' para devolver un Observable
    app.ngOnInit();
    expect(app.title).toEqual('Hello, Smarters!');
  });
});
