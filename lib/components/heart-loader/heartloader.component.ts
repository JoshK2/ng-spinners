import { Component, Input } from '@angular/core'

@Component({
    selector: 'heart-loader',
    templateUrl: './heartloader.component.html',
    styleUrls: ['./heartloader.component.css'],
})
export class HeartLoaderComponent {
    @Input() color: string = '#7f58af'
}
