import { Component, Input } from '@angular/core'

@Component({
    selector: 'hourglass-loader',
    templateUrl: './hourglassloader.component.html',
    styleUrls: ['./hourglassloader.component.css'],
})
export class HourglassLoaderComponent {
    @Input() color: string = '#7f58af'
}
