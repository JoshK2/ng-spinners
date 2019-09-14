import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CircleLoaderComponent } from './circleloader.component'

@NgModule({
    imports: [CommonModule],
    declarations: [CircleLoaderComponent],
    exports: [CircleLoaderComponent],
})
export class CircleLoaderModule {}
