import { Routes } from '@angular/router';
import { CdkDragDropConnectedSortingExample } from './components/cdk-drag-drop-connected-sorting-example/cdk-drag-drop-connected-sorting-example.component';
import { DragdropComponent } from './pages/dragdrop/dragdrop.component';
import { CdkDragDropOverviewExampleComponent } from './components/cdk-drag-drop-overview-example/cdk-drag-drop-overview-example.component';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';

export const routes: Routes = [
  {
    path: 'dragme',
    component: CdkDragDropOverviewExampleComponent
  },
  {
    path: 'dragdrop',
    component: CdkDragDropConnectedSortingExample
  }
];
