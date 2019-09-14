import { Component, Input } from '@angular/core'

@Component({
    selector: 'orbitals-loader',
    templateUrl: './orbitalsloader.component.html',
    styleUrls: ['./orbitalsloader.component.css'],
})
export class OrbitalsLoaderComponent {
    @Input() color: string = '#7f58af'
}
