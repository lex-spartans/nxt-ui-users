import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Description placeholder
 *
 * @export
 * @class AppComponent
 * @typedef {AppComponent}
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  /**
   * Description placeholder
   *
   * @public
   * @type {!string}
   */
  public title!: string;

  /**
   * Description placeholder
   *
   * @public
   */
  public init(): void {
    this.title = 'Hello, Smarters!';
  }
}
