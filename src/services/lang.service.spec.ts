import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from './lang.service';
import { DEFAULT_LANGUAGE, LANGUAGE_KEY } from '../app/shared/constants/app.constants';

describe('LangService', () => {
  let service: LangService;
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('TranslateService', ['use']);

    TestBed.configureTestingModule({
      providers: [
        LangService,
        { provide: TranslateService, useValue: spy }
      ],
    });

    service = TestBed.inject(LangService);
    translateServiceSpy = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getLanguage', () => {
    it('should return the stored language if available', () => {
      localStorage.setItem(LANGUAGE_KEY, 'en');
      const language = service.getLanguage();
      expect(language).toBe('en');
    });

    it('should return the default language if no language is stored', () => {
      const language = service.getLanguage();
      expect(language).toBe(DEFAULT_LANGUAGE);
    });
  });

  describe('#changeLanguage', () => {
    it('should store the new language in localStorage', () => {
      service.changeLanguage('fr');
      const storedLanguage = localStorage.getItem(LANGUAGE_KEY);
      expect(storedLanguage).toBe('fr');
    });

    it('should call translateService.use with the new language', () => {
      service.changeLanguage('es');
      expect(translateServiceSpy.use).toHaveBeenCalledWith('es');
    });
  });
});
