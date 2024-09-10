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
export const authInterceptorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const reqClone: HttpRequest<unknown> = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Cache-Control': 'no-store',
      'Accept-Encoding': 'gzip',
    },
  });

  return next(reqClone);

  /*   return next(reqClone).pipe(
    switchMap((res: unknown) => {
      console.log('🚀 ~ switchMap ~ res:', res);
    }),
    catchError((error: unknown) => {
      console.log('🚀 ~ catchError ~ error:', error);
    }),
  ); */
};
