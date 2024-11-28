import { Routes } from '@angular/router';
import { CdkDragDropConnectedSortingExample } from './components/cdk-drag-drop-connected-sorting-example/cdk-drag-drop-connected-sorting-example.component';
import { DragdropComponent } from './pages/dragdrop/dragdrop.component';

export const routes: Routes = [
    {
        path: 'dragdrop',
        component: DragdropComponent
      }
];
