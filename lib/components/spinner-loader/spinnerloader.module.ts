import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SpinnerLoaderComponent } from './spinnerloader.component'

@NgModule({
    imports: [CommonModule],
    declarations: [SpinnerLoaderComponent],
    exports: [SpinnerLoaderComponent],
})
export class SpinnerLoaderModule {}
