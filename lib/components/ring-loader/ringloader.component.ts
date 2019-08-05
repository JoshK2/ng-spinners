import { Component, Input } from '@angular/core';

@Component({
  selector: 'ring-loader',
  templateUrl: './ringloader.component.html',
  styleUrls: ['./ringloader.component.css']
})
export class RingLoaderComponent {
  @Input() color: string = '#7f58af';

  getBorderColor(): string {
    return this.color + ' transparent transparent transparent';
  }
}