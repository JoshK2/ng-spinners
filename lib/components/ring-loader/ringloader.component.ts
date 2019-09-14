import { Component, Input } from '@angular/core'

@Component({
    selector: 'ring-loader',
    templateUrl: './ringloader.component.html',
    styleUrls: ['./ringloader.component.css'],
})
export class RingLoaderComponent {
    @Input() color: string = '#7f58af'
    @Input() size: number =  80

    getBorder(): object {
        return { 
            'border-color': `${this.color} transparent transparent transparent`,
            'border-width': `${this.size * 0.1}px`,
            width: `${this.size * 0.8}px`,
            height: `${this.size * 0.8}px`,
            margin: `${this.size * 0.1}px`
            }
    }

    getStyle(): object {
        return { width: `${this.size}px`, height: `${this.size}px` }
    }
}