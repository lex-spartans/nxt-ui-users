import { Component } from '@angular/core';

import { TreeComponent } from '../../organisms/tree/tree.component';

/**
 *
 */
@Component({
  selector: 'app-lateral-layout',
  standalone: true,
  imports: [TreeComponent],
  templateUrl: './lateral-layout.component.html',
  styleUrl: './lateral-layout.component.scss',
})
export class LateralLayoutComponent {}
