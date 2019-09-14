import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeartLoaderComponent } from './heartloader.component'

@NgModule({
    imports: [CommonModule],
    declarations: [HeartLoaderComponent],
    exports: [HeartLoaderComponent],
})
export class HeartLoaderModule {}
