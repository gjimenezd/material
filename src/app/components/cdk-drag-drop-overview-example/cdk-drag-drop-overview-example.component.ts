import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { MenuPositionExample } from "../menu-position-example/menu-position-example.component";

@Component({
  selector: 'app-cdk-drag-drop-overview-example',
  standalone: true,
  imports: [CdkDrag, NgFor, MenuPositionExample],
  templateUrl: './cdk-drag-drop-overview-example.component.html',
  styleUrl: './cdk-drag-drop-overview-example.component.scss'
})
export class CdkDragDropOverviewExampleComponent {
  
  uppercaseLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  
  blockSize = 50;
  lastCoordinates = { x: 0, y: 0 };
  
  copy($event: MouseEvent) {

    const mtext = ($event.target as HTMLElement);
    if (!mtext.textContent) return;
    
    this.uppercaseLetters.push(mtext.textContent!);
    const rect = mtext.getBoundingClientRect();
    const x = $event.clientX - rect.left;
    const y = $event.clientY - rect.top;
    this.lastCoordinates.x = x;
    this.lastCoordinates.y = y;

    //uppercaseLetters last element

  }
  
  
  changeSize() {
  const inputElement = document.querySelector('input[name="size"]') as HTMLInputElement;
  if (inputElement) {
    const newSize = parseInt(inputElement.value, 10);
    if (!isNaN(newSize) && newSize > 0) {
      this.blockSize = newSize;
    }
  }
  }


}
