import { Component, Input } from '@angular/core'

@Component({
    selector: 'roller-loader',
    templateUrl: './rollerloader.component.html',
    styleUrls: ['./rollerloader.component.css'],
})
export class RollerLoaderComponent {
    @Input() color: string = '#7f58af'
}
