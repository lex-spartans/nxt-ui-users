
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { authInterceptor } from './auth-interceptor.interceptor';

// Mock del AlertService
class MockAlertService {
  emitMessage(_message: any): void {
    // Mock del Method emitMessage
  }
}

describe('authInterceptor', () => {

  let next: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ useClass: MockAlertService }],
    });


    // Mock de la función `next`, simula la cadena de manejo de HTTP
    next = jasmine.createSpy('next');
  });

  it('should emit success message on non-GET requests with status < 400', () => {
    const req = new HttpRequest('POST', '/api/test', { body: null });

    // Simula una respuesta HTTP exitosa
    next.and.returnValue(of(new HttpResponse({ status: 200 })));

    TestBed.runInInjectionContext(() => {
      authInterceptor(req, next).subscribe();
    });

  });

  it('should emit error message on status > 400', () => {
    const req = new HttpRequest('GET', '/api/test');

    // Simula una respuesta HTTP fallida
    next.and.returnValue(throwError(() => new HttpErrorResponse({ status: 500 })));

    TestBed.runInInjectionContext(() => {
      authInterceptor(req, next).subscribe({
        error: () => {
        },
      });
    });
  });
});
