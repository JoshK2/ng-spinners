import { Component, Input } from '@angular/core'

@Component({
    selector: 'spinner-loader',
    templateUrl: './spinnerloader.component.html',
    styleUrls: ['./spinnerloader.component.css'],
})
export class SpinnerLoaderComponent {
    @Input() color: string = '#7f58af'
}
