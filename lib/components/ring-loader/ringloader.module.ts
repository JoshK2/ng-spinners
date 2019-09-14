import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RingLoaderComponent } from './ringloader.component'

@NgModule({
    imports: [CommonModule],
    declarations: [RingLoaderComponent],
    exports: [RingLoaderComponent],
})
export class RingLoaderModule {}
