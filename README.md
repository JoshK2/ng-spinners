# ng-angular-spinners [![bit components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=bit%20components&query=payload.totalComponents&url=https%3A%2F%2Fapi.bit.dev%2Fscope%2Fjoshk%2Fng-angular-spinners)](https://bit.dev/joshk/ng-spinners)

Angular CSS spinners for ajax or loading animation based on loadingio.  
<p align="center">
  <a href="https://bit.dev/joshk/ng-spinners"><img src="https://i.imagesup.co/images2/7ec8f6aa235b4da4e57602c238b996fafbd7727b.gif"></a>
</p>

## Play and install spinners for Angular with Bit
Using [bit](https://bit.dev/joshk/ng-spinners) to play with live demo, and try the spinners before install.


### Install specific Angular spinner component/module with bit, npm or yarn without having to install the whole project

set npm regisetry config(one time action):
```bash
npm config set '@bit:registry' https://node.bit.dev
```
and use your favorite package manager:
```bash
npm i @bit/joshk.ng-angular-spinners.facebook-loader
yarn add @bit/joshk.ng-angular-spinners.facebook-loader
bit import joshk.ng-angular-spinners/facebook-loader 
```  

## API

### Components

- `<circle-loader></circle-loader>`
- `<facebook-loader></facebook-loader>`
- `<hourglass-loader></hourglass-loader>`
- `<ripple-loader></ripple-loader>`
- `<spinner-loader></spinner-loader>`
- `<default-loader></default-loader>`
- `<grid-loader></grid-loader>`
- `<ring-loader></ring-loader>`
- `<dualring-loader></dualring-loader>`
- `<heart-loader></heart-loader>`
- `<roller-loader></roller-loader>`  
- `<ellipsis-loader></ellipsis-loader>`

#### Input Property

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `color` | `string` | `#7f58af`  |

## Usage Examples

module file example:
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FacebookLoaderModule } from '@bit/joshk.ng-angular-spinners.facebook-loader';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		FacebookLoaderModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
```
component html file example:
```html
<facebook-loader color="black"></facebook-loader>
<facebook-loader color="#de3541"></facebook-loader>
<facebook-loader></facebook-loader>
```
Complete example of this component can be found [here](https://bit.dev/joshk/ng-spinners/facebook-loader).  

## License
[MIT](https://choosealicense.com/licenses/mit/)

