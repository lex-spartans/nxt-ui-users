import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetJsonService } from '../services/get-json.service';

/**
 * Description placeholder
 *
 * @export
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

  private getService: GetJsonService = inject(GetJsonService);

  /**
   * Description placeholder
   *
   * @public
   */
  public ngOnInit(): void {
    this.getService.getdata().subscribe((res: unknown) => {
      console.log('🚀 ~ AppComponent ~ this.getService.getdata ~ res:', res);
    });
    this.title = 'Hello, Smarters!';
  }
}
