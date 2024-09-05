import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MenuItem, TreeDragDropService, TreeNode } from 'primeng/api';
import { TreeModule, TreeNodeDropEvent } from 'primeng/tree';
import { ButtonModule } from 'primeng/button';
import { ContextMenu, ContextMenuModule } from 'primeng/contextmenu';

@Component({
  selector: 'sps-tree',
  standalone: true,
  imports: [TreeModule, ButtonModule, ContextMenuModule],
  templateUrl: './sps-tree.component.html',
  styleUrl: './sps-tree.component.scss',
  providers: [TreeDragDropService],
})
export class SpsTreeComponent {
  @ViewChild('cm') public cm!: ContextMenu;

  @Input() public nodes!: TreeNode[];
  @Input() public draggable!: boolean;
  @Input() public canAdd!: boolean;
  @Input() public emptyMessage!: string;
  @Input() public itemsMenu: MenuItem[] | undefined;

  @Output() public readonly expandNode: EventEmitter<TreeNode> =
    new EventEmitter<TreeNode>();
  @Output() public readonly selectNode: EventEmitter<TreeNode> =
    new EventEmitter<TreeNode>();
  @Output() public readonly dropNode: EventEmitter<TreeNodeDropEvent> =
    new EventEmitter<TreeNodeDropEvent>();
  @Output() public readonly addClick: EventEmitter<Event> =
    new EventEmitter<Event>();

  public icons: boolean;
  public selectedNode!: TreeNode | null;
  public hoveredNode!: string;
  private initialMousePosition!: { x: number; y: number };
  private startClick!: Date;

  constructor() {
    this.icons = false;
  }

  public onNodeSelect(event: { node: TreeNode }): void {
    this.selectNode.emit(event.node);
  }

  public onNodeExpand(event: { node: TreeNode }): void {
    this.expandNode.emit(event.node);
  }

  public onDropNode(event: TreeNodeDropEvent): void {
    this.dropNode.emit(event);
  }

  public onAddClicked(event: Event): void {
    this.addClick.emit(event);
  }

  public onMenuClicked(event: Event, node: TreeNode): void {
    console.log('onMenuClicked -> ', { node });
    this.selectNode.emit(node);
    this.cm.show(event);
  }
  public onHide(): void {
    this.selectedNode = null;
  }

  public mouseOver(node: TreeNode): void {
    this.hoveredNode = node.key || '';
  }

  public mouseLeave(): void {
    this.hoveredNode = '';
  }

  public mouseDown(event: MouseEvent, node: TreeNode): void {
    console.log('mouseDown');

    this.selectedNode = node;
    this.initialMousePosition = { x: event.clientX, y: event.clientY };
    this.startClick = new Date();
  }

  public mouseUp(event: MouseEvent): void {
    console.log('mouseUp');
    const endClick: Date = new Date();
    const timeDiff: number = endClick.getTime() - this.startClick.getTime();
    const moved: boolean =
      Math.abs(event.clientX - this.initialMousePosition.x) > 5 ||
      Math.abs(event.clientY - this.initialMousePosition.y) > 5;
    if (moved) {
      console.log('Element moved while holding the click');
      console.log(timeDiff);
    }
  }
}
