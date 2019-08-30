# Angular Spinners CSS Loaders  
[![bit components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=bit%20components&query=payload.totalComponents&url=https%3A%2F%2Fapi.bit.dev%2Fscope%2Fjoshk%2Fng-spinners)](https://bit.dev/joshk/ng-spinners)
[![npm version](https://badge.fury.io/js/ng-spinners.svg)](http://badge.fury.io/js/ng-spinners)
[![GitHub stars](https://img.shields.io/github/stars/joshk2/ng-spinners)](https://github.com/JoshK2/ng-spinners/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/JoshK2/ng-spinners/master/LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/joshkuttler)](https://twitter.com/JoshKuttler)

Amazing collection of pure CSS angular spinners components of css spinners for ajax or loading animation based on loading.io.  
[Install components and live demo](https://bit.dev/joshk/ng-spinners)
<p align="center">
  <a href="https://bit.dev/joshk/ng-spinners"><img src="https://i.imagesup.co/images2/010e655fd10abc5621d067f8b8ad33c7cac7d840.gif"></a>
</p>

## 🚀 List of components

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

## 🚀 Installation
### Using [npm](https://www.npmjs.com/package/ng-spinners) to install ng-spinners
```
npm i --save ng-spinners
```
### Play and install spinners for Angular with Bit
Install specific Angular spinner component/module with bit, npm or yarn without having to install the whole project
Using [bit](https://bit.dev/joshk/ng-spinners) to play with live demo, and try the spinners before install.


set npm regisetry config(one time action):
```bash
npm config set '@bit:registry' https://node.bit.dev
```
and use your favorite package manager:
```bash
npm i @bit/joshk.ng-spinners.facebook-loader
yarn add @bit/joshk.ng-spinners.facebook-loader
bit import joshk.ng-spinners/facebook-loader 
```  

## 💻 Usage Examples

module file example:
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//using npm or yarn
import { FacebookLoaderModule } from 'ng-spinners';
//using bit
import { FacebookLoaderModule } from '@bit/joshk.ng-spinners.facebook-loader';

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

## 👾 Development

You can see the components locally by cloning this repo and doing the following steps:
- Install dependencies from `package.json`, run: `npm install`.
- Run the app in the development mode, run: `npm run start`.  

## ⌨️ Contributing

- Pull requests and ⭐ stars are always welcome.
- For bugs and feature requests, please create an issue.

## 📄 License
[MIT](https://github.com/JoshK2/ng-spinners/blob/master/LICENSE)

