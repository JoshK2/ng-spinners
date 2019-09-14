import { Component, Input } from '@angular/core'

@Component({
    selector: 'default-loader',
    templateUrl: './defaultloader.component.html',
    styleUrls: ['./defaultloader.component.css'],
})
export class DefaultLoaderComponent {
    @Input() color: string = '#7f58af'
}
