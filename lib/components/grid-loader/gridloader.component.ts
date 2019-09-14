import { Component, Input } from '@angular/core'

@Component({
    selector: 'grid-loader',
    templateUrl: './gridloader.component.html',
    styleUrls: ['./gridloader.component.css'],
})
export class GridLoaderComponent {
    @Input() color: string = '#7f58af'
}
