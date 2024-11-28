import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DEFAULT_LANGUAGE, LANGUAGE_KEY } from '../app/shared/constants/app.constants';


/**
 * localstorage declaration
 */
declare const localStorage: Storage;

/**
 * Servicio de lenguajes
 */
@Injectable({
  providedIn: 'root',
})
export class LangService {
  /**
   * Servicio de traducción de ngx-translate
   *
   * @private
   * @type {TranslateService}
   */
  private _translateService: TranslateService = inject(TranslateService);

  /**
   * Obtiene el lenguaje almacenado en storage
   *
   * @returns {string}
   */
  getLanguage(): string {
    const language: string | null = localStorage.getItem(LANGUAGE_KEY);
    return language ? language : DEFAULT_LANGUAGE;
  }

  /**
   * Establece el lenguaje y lo guarda en storage
   *
   * @param { string } language
   */
  changeLanguage(language: string): void {
    // eslint-disable-next-line no-undef
    localStorage.setItem(LANGUAGE_KEY, language);
    this._translateService.use(language);
  }
}
