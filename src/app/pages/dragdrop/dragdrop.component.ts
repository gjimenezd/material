import { Component } from '@angular/core';
import { CdkDragDropConnectedSortingExample } from "../../components/cdk-drag-drop-connected-sorting-example/cdk-drag-drop-connected-sorting-example.component";


@Component({
  selector: 'app-dragdrop',
  standalone: true,
  imports: [CdkDragDropConnectedSortingExample],
  templateUrl: './dragdrop.component.html',
  styleUrl: './dragdrop.component.scss'
})
export class DragdropComponent {

}
