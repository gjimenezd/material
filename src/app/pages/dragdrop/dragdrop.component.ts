import { Component } from '@angular/core';
import { CdkDragDropConnectedSortingExample } from '../../components/cdk-drag-drop-connected-sorting-example/cdk-drag-drop-connected-sorting-example.component';
import { MenuPositionExample } from '../../components/menu-position-example/menu-position-example.component';


@Component({
  selector: 'app-dragdrop',
  standalone: true,
  imports: [CdkDragDropConnectedSortingExample, MenuPositionExample],
  templateUrl: './dragdrop.component.html',
  styleUrl: './dragdrop.component.scss'
})
export class DragdropComponent {

}
