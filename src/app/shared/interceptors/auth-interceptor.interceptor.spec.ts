import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { authInterceptorInterceptor } from './auth-interceptor.interceptor';

describe('authInterceptorInterceptor', () => {
  let interceptor: HttpInterceptorFn;
  let req: HttpRequest<unknown>;
  let next: HttpHandlerFn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    interceptor = authInterceptorInterceptor;
    req = new HttpRequest('GET', 'http://example.com');
    next = jasmine.createSpyObj('next', ['handle']);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
  it('should call next.handle with the cloned request without errors', () => {
    interceptor(req, next);
    expect(next).toHaveBeenCalledWith(req.clone());
  });
});



