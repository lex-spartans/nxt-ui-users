import { TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { AppComponent } from './app.component';
import { LangService } from '../services/lang.service';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { GetJsonService } from '../services/get-json.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;
  let getServiceSpy: jasmine.SpyObj<GetJsonService>;

  beforeEach(() => {
    translateServiceSpy = jasmine.createSpyObj('TranslateService', ['get']);
    translateServiceSpy.get.and.returnValue(of('Translated Text'));
    getServiceSpy = jasmine.createSpyObj('GetJsonService', ['getdata']);

    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: MessageService,
          useValue: {
            add: jasmine.createSpy('add'),
          },
        },
        { provide: TranslateService, useValue: translateServiceSpy },
        {
          provide: LangService,
          useValue: {
            getLanguage: () => 'en',
            changeLanguage: jasmine.createSpy('changeLanguage'),
          },
        },
      ],
    }).overrideComponent(AppComponent, {
      set: {
        providers: [], // Removemos los proveedores definidos en el componente
      },
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "Smarters!"', () => {
    getServiceSpy.getdata.and.returnValue(of()); // Cambiado a 'of()' para devolver un Observable
    component.ngOnInit();
    expect(component.title).toEqual('Smarters!');
  });
});
