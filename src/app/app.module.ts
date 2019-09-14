import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {
    CircleLoaderModule,
    FacebookLoaderModule,
    HourglassLoaderModule,
    RippleLoaderModule,
    SpinnerLoaderModule,
    DefaultLoaderModule,
    GridLoaderModule,
    RingLoaderModule,
    DualRingLoaderModule,
    HeartLoaderModule,
    RollerLoaderModule,
    EllipsisLoaderModule,
    OrbitalsLoaderModule,
} from '../../lib/components'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,

        CircleLoaderModule,
        FacebookLoaderModule,
        HourglassLoaderModule,
        RippleLoaderModule,
        SpinnerLoaderModule,
        DefaultLoaderModule,
        GridLoaderModule,
        RingLoaderModule,
        DualRingLoaderModule,
        HeartLoaderModule,
        RollerLoaderModule,
        EllipsisLoaderModule,
        OrbitalsLoaderModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
