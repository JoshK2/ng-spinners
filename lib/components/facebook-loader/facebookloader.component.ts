import { Component, Input } from '@angular/core'

@Component({
    selector: 'facebook-loader',
    templateUrl: './facebookloader.component.html',
    styleUrls: ['./facebookloader.component.css'],
})
export class FacebookLoaderComponent {
    @Input() color: string = '#7f58af'
}
