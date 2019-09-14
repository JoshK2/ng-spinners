import { Component, Input } from '@angular/core'

@Component({
    selector: 'ellipsis-loader',
    templateUrl: './ellipsisloader.component.html',
    styleUrls: ['./ellipsisloader.component.css'],
})
export class EllipsisLoaderComponent {
    @Input() color: string = '#7f58af'
}
