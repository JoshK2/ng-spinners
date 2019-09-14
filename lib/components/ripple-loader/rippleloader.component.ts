import { Component, Input } from '@angular/core'

@Component({
    selector: 'ripple-loader',
    templateUrl: './rippleloader.component.html',
    styleUrls: ['./rippleloader.component.css'],
})
export class RippleLoaderComponent {
    @Input() color: string = '#7f58af'
}
