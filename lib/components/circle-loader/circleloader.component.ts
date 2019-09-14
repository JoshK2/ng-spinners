import { Component, Input } from '@angular/core'

@Component({
    selector: 'circle-loader',
    templateUrl: './circleloader.component.html',
    styleUrls: ['./circleloader.component.css'],
})
export class CircleLoaderComponent {
    @Input() color: string = '#7f58af'
    @Input() size: number = 64

    getStyle(): object {
        return { 'background-color': this.color, width: `${this.size}px`, height: `${this.size}px` }
    }
}
