import { Routes } from '@angular/router';
import { CdkDragDropConnectedSortingExample } from './components/cdk-drag-drop-connected-sorting-example/cdk-drag-drop-connected-sorting-example.component';
import { DragdropComponent } from './pages/dragdrop/dragdrop.component';
import { CdkDragDropOverviewExampleComponent } from './components/cdk-drag-drop-overview-example/cdk-drag-drop-overview-example.component';

export const routes: Routes = [
  {
    path: 'dragdrop',
    component: DragdropComponent
  },
  {
    path: 'dragme',
    component: CdkDragDropOverviewExampleComponent
  }
];
