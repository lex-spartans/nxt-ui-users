import { Component } from '@angular/core';
import { LateralLayoutComponent } from '../../templates/lateral-layout/lateral-layout.component';

@Component({
  selector: 'app-hierarchy',
  standalone: true,
  imports: [LateralLayoutComponent],
  templateUrl: './hierarchy.component.html',
  styleUrl: './hierarchy.component.scss',
})
export class HierarchyComponent {}
