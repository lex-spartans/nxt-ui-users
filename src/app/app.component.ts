import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Description placeholder
 *
 * @class
 * @class Component
 * @typedef {AppComponent}
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
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
  public ngOnInit(): void {
    this.title = 'Hello, Smarters!';
  }
}
