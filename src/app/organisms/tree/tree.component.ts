import { Component, inject, OnInit, ViewChild } from '@angular/core';
import {
  ConfirmationService,
  MenuItem,
  MessageService,
  TreeNode,
} from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenu, ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { TreeNodeDropEvent } from 'primeng/tree';
import { InputTextModule } from 'primeng/inputtext';
import { SpsTreeComponent } from '../../molecules/sps-tree/sps-tree.component';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [
    ContextMenuModule,
    ToastModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule,
    SpsTreeComponent,
  ],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class TreeComponent implements OnInit {
  public nodes!: TreeNode[];
  public itemsMenu: MenuItem[] | undefined;
  public itemsAddMenu: MenuItem[] | undefined;

  public selectedNode!: TreeNode | null;
  public isDialogVisible!: boolean;
  public dialogHeader!: string;

  private messageService: MessageService = inject(MessageService);
  private confirmationService: ConfirmationService =
    inject(ConfirmationService);
  @ViewChild('acm') public acm!: ContextMenu;

  public onNodeSelect(event: TreeNode): void {
    console.log('onSelectNode -> ', { event });
    this.selectedNode = event;
  }

  public onNodeExpand(event: TreeNode): void {
    console.log('onExpandNode -> ', { event });
  }

  public onDropNode(event: TreeNodeDropEvent): void {
    console.log('onDropNode -> ', { event });
  }

  public onAddClicked(event: Event): void {
    event.stopPropagation();
    console.log('onAddClicked -> ', { event });
    this.acm.show(event);
  }

  private onUpdateSelected(): void {
    this.dialogHeader = `Editar ${this.selectedNode?.data.level}`;
    this.isDialogVisible = true;
  }

  private onDeleteSelected(): void {
    this.confirmationService.confirm({
      message: `¿Está seguro que desea eliminar a ${this.selectedNode?.data.name}?`,
      header: `Eliminar ${this.selectedNode?.data.level}`,
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'none',
      acceptLabel: 'Eliminar',
      rejectIcon: 'none',
      rejectLabel: 'Cancelar',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.deleteNode();
      },
    });
  }

  private onCreateSelected(): void {
    this.isDialogVisible = true;
  }

  public ngOnInit(): void {
    this.loadNodes();
    this.itemsMenu = [
      {
        label: 'Cambiar nombre',
        icon: 'pi pi-pen-to-square',
        command: (): void => {
          this.onUpdateSelected();
        },
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: (): void => {
          this.onDeleteSelected();
        },
      },
    ];

    this.itemsAddMenu = [
      {
        label: 'Grupo',
        icon: 'pi pi-building-columns',
        command: (): void => {
          this.dialogHeader = 'Crear Grupo';
          this.onCreateSelected();
        },
      },
      {
        label: 'Red de Comercio',
        icon: 'pi pi-building',
        command: (): void => {
          this.dialogHeader = 'Crear Red de Comercio';
          this.onCreateSelected();
        },
      },
      {
        label: 'Comercio',
        icon: 'pi pi-briefcase',
        command: (): void => {
          this.dialogHeader = 'Crear Comercio';
          this.onCreateSelected();
        },
      },
      {
        label: 'Sucursal',
        icon: 'pi pi-home',
        command: (): void => {
          this.dialogHeader = 'Crear Sucursal';
          this.onCreateSelected();
        },
      },
      {
        label: 'Punto de venta',
        icon: 'pi pi-calculator',
        command: (): void => {
          this.dialogHeader = 'Crear Punto de Venta';
          this.onCreateSelected();
        },
      },
    ];
  }

  public updateNode(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Acción realizada',
      detail: 'Se realizó correctamente la acción',
      life: 3000,
    });
    this.isDialogVisible = false;
  }

  private deleteNode(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Acción realizada',
      detail: 'Se realizó correctamente la acción',
      life: 3000,
    });
  }

  private loadNodes(): void {
    this.nodes = this.initiateNodes();
  }

  private initiateNodes(): TreeNode[] {
    return [
      {
        key: '20',
        data: {
          id: 1,
          name: 'Inditex',
          level: 1,
        },
        children: [
          {
            key: '20.0',
            data: {
              id: 2,
              name: 'Zara',
              level: 2,
            },
            children: [
              {
                key: '20.0.0',
                data: {
                  id: 5,
                  name: 'Sucursal Norte',
                  level: 3,
                },
                children: [
                  {
                    key: '20.0.0.0',
                    data: {
                      id: 30,
                      name: 'Punto de venta',
                      level: 4,
                    },
                  },
                  {
                    key: '20.0.0.1',
                    data: {
                      id: 31,
                      name: 'Punto de venta',
                      level: 4,
                    },
                  },
                ],
              },
              {
                key: '20.0.1',
                data: {
                  id: 6,
                  name: 'Sucursal Norte 2',
                  level: 3,
                },
                children: [
                  {
                    key: '20.0.0.0',
                    data: {
                      id: 14,
                      name: 'Punto de venta',
                      level: 4,
                    },
                  },
                  {
                    key: '20.0.0.1',
                    data: {
                      id: 15,
                      name: 'Punto de venta',
                      level: 4,
                    },
                  },
                ],
              },
              {
                key: '20.0.2',
                data: {
                  id: 7,
                  name: 'Sucursal Oriente',
                  level: 3,
                },
                children: [
                  {
                    key: '20.0.0.0',
                    data: {
                      id: 16,
                      name: 'Punto de venta',
                      level: 4,
                    },
                  },
                  {
                    key: '20.0.0.1',
                    data: {
                      id: 17,
                      name: 'Punto de venta',
                      level: 4,
                    },
                  },
                ],
              },
            ],
          },
          {
            key: '20.1',
            data: {
              id: 3,
              name: 'Bershka',
              level: 2,
            },
            children: [
              {
                key: '20.1.0',
                data: {
                  id: 8,
                  name: 'Sucursal Centro',
                  level: 3,
                },
                children: [
                  {
                    key: '20.1.0.0',
                    data: {
                      id: 18,
                      name: 'Punto de venta',
                      level: 4,
                    },
                  },
                  {
                    key: '20.1.0.1',
                    data: {
                      id: 19,
                      name: 'Punto de venta',
                      level: 4,
                    },
                  },
                ],
              },
              {
                key: '20.1.1',
                data: {
                  id: 9,
                  name: 'Sucursal Centro 2',
                  level: 3,
                },
                children: [
                  {
                    key: '20.1.1.0',
                    data: {
                      id: 20,
                      name: 'Punto de venta',
                      level: 4,
                    },
                  },
                  {
                    key: '20.1.1.1',
                    data: {
                      id: 21,
                      name: 'Punto de venta',
                      level: 4,
                    },
                  },
                ],
              },
              {
                key: '20.1.2',
                label: 'Sucursal Sur',
                data: {
                  id: 10,
                  name: 'Pull&Bear',
                  level: 3,
                },
                children: [
                  {
                    key: '20.1.2.0',
                    label: 'Punto de venta',
                    data: {
                      id: 22,
                      name: 'Pull&Bear',
                      level: 4,
                    },
                  },
                  {
                    key: '20.1.2.1',
                    label: 'Punto de venta',
                    data: {
                      id: 23,
                      name: 'Pull&Bear',
                      level: 4,
                    },
                  },
                ],
              },
              {
                key: '20.1.3',
                label: 'Sucursal Norte',
                data: {
                  id: 11,
                  name: 'Pull&Bear',
                  level: 3,
                },
                children: [
                  {
                    key: '20.1.3.0',
                    label: 'Punto de venta',
                    data: {
                      id: 24,
                      name: 'Pull&Bear',
                      level: 4,
                    },
                  },
                  {
                    key: '20.1.3.1',
                    label: 'Punto de venta',
                    data: {
                      id: 25,
                      name: 'Pull&Bear',
                      level: 4,
                    },
                  },
                ],
              },
            ],
          },
          {
            key: '20.2',
            data: {
              id: 4,
              name: 'Pull&Bear',
              level: 2,
            },
            children: [
              {
                key: '20.2.0',
                label: 'Sucursal Poniente',
                data: {
                  id: 12,
                  name: 'Sucursal Poniente',
                  level: 3,
                },
                children: [
                  {
                    key: '20.2.0.0',
                    data: {
                      id: 26,
                      name: 'Punto de venta',
                      level: 4,
                    },
                  },
                  {
                    key: '20.2.0.1',
                    data: {
                      id: 27,
                      name: 'Punto de venta',
                      level: 4,
                    },
                  },
                ],
              },
              {
                key: '20.2.1',
                data: {
                  id: 13,
                  name: 'Sucursal Observatorio',
                  level: 3,
                },
                children: [
                  {
                    key: '20.2.1.0',
                    data: {
                      id: 28,
                      name: 'Punto de venta',
                      level: 4,
                    },
                  },
                  {
                    key: '20.2.1.1',
                    data: {
                      id: 29,
                      name: 'Punto de venta',
                      level: 4,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  }
}
