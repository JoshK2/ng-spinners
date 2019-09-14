import { Component, Input } from '@angular/core'

@Component({
    selector: 'circle-loader',
    templateUrl: './circleloader.component.html',
    styleUrls: ['./circleloader.component.css'],
})
export class CircleLoaderComponent {
    @Input() color: string = '#7f58af'
    @Input() size: string = '64px'
}
