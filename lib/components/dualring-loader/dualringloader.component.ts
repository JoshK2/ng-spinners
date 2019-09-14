import { Component, Input } from '@angular/core'

@Component({
    selector: 'dualring-loader',
    templateUrl: './dualringloader.component.html',
    styleUrls: ['./dualringloader.component.css'],
})
export class DualRingLoaderComponent {
    @Input() color: string = '#7f58af'

    getBorderColor(): string {
        return this.color + ' transparent'
    }
}
