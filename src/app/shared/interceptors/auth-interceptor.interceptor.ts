import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';

/**
 * Description placeholder
 *
 * @param {HttpRequest<unknown>} req
 * @param {HttpHandlerFn} next
 * @returns {*}
 */
export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {

  const reqClone: HttpRequest<unknown> = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
    },
  });

  return next(reqClone)
    .pipe
    ();
};
