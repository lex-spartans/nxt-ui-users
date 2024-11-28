import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { LangService } from '../services/lang.service';

/**
 * Main application component that displays
 * a welcome message and handles alert messages.
 *
 * @class
 * @class AppComponent
 * @type {AppComponent}
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  /**
   * Language Service
   *
   * @private
   * @type {LangService}
   */
  private _langService: LangService = inject(LangService);

  /**
   * Description placeholder
   *
   * @public
   * @type {!string}
   */
  public title!: string;

  /**
   * Instance constructor
   */
  // eslint-disable-next-line no-unused-vars
  constructor() {
    const language: string = this._langService.getLanguage();
    this._langService.changeLanguage(language);
  }

  /**
   * Description placeholder
   *
   * @public
   */
  public ngOnInit(): void {

    this.title = 'Smarters!';
  }
}
