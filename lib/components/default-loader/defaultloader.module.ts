import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DefaultLoaderComponent } from './defaultloader.component'

@NgModule({
    imports: [CommonModule],
    declarations: [DefaultLoaderComponent],
    exports: [DefaultLoaderComponent],
})
export class DefaultLoaderModule {}
