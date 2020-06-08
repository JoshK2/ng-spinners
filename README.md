# Angular Spinners CSS Loaders ([Vue](https://github.com/JoshK2/vue-spinners-css), [React](https://github.com/JoshK2/react-spinners-css))
[![bit components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=bit%20components&query=payload.totalComponents&url=https%3A%2F%2Fapi.bit.dev%2Fscope%2Fjoshk%2Fng-spinners)](https://bit.dev/joshk/ng-spinners)
[![npm version](https://badge.fury.io/js/ng-spinners.svg)](http://badge.fury.io/js/ng-spinners)
[![GitHub stars](https://img.shields.io/github/stars/joshk2/ng-spinners)](https://github.com/JoshK2/ng-spinners/stargazers)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/JoshK2/ng-spinners/master/LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/joshkuttler)](https://twitter.com/JoshKuttler)

<p align="center">
  <a href="https://bit.dev/joshk/ng-spinners"><img src="https://i.imagesup.co/images2/1990710a88808ee8914167c74f57e604c5ed91fe.gif"></a>
</p>

Amazing collection of Angular spinners components with pure css.  
The Angular spinners are based on loading.io and from all over the web.

- 💅No extra CSS imports
- ✂️Zero dependencies
- 📦Spinners can be installing separately

## [Live Demo](https://bit.dev/joshk/ng-spinners)
Browse components and explore their props with [Bit](https://bit.dev/joshk/ng-spinners).  
Install specific angular spinner component with npm, yarn or bit without having to install the whole project.  
[Install components and live demo](https://bit.dev/joshk/ng-spinners)


## 🚀 List of Spinners - Input and Default Property
Each component accepts a `color` prop, and few accepts also `size` prop.  
The default `color` prop is `#7f58af`.  
Component that accepts `size` prop have a default size in pixel.

| Spinner                                | color: string | size: number  |
| -------------------------------------- | ------------  | ------------- |
| `<circle-loader></circle-loader>`      | `#7f58af`     | `64`          |
| `<default-loader></default-loader>`    | `#7f58af`     | -             |
| `<dualring-loader></dualring-loader>`  | `#7f58af`     | -             |
| `<ellipsis-loader></ellipsis-loader>`  | `#7f58af`     | -             |
| `<facebook-loader></facebook-loader>`  | `#7f58af`     | -             |
| `<grid-loader></grid-loader>`          | `#7f58af`     | -             |
| `<heart-loader></heart-loader>`        | `#7f58af`     | -             |
| `<hourglass-loader></hourglass-loader>`| `#7f58af`     | -             |
| `<ring-loader></ring-loader>`          | `#7f58af`     | `80`          |
| `<ripple-loader></ripple-loader>`      | `#7f58af`     | -             |
| `<roller-loader></roller-loader>`      | `#7f58af`     | -             |
| `<spinner-loader></spinner-loader>`    | `#7f58af`     | -             |
| `<orbitals-loader></orbitals-loader>`  | `#7f58af`     | -             |


## 📦 Installation
### Using [npm](https://www.npmjs.com/package/ng-spinners) to install ng-spinners
```
npm i --save ng-spinners
```
### Play and install spinners for Angular with [Bit](https://bit.dev/joshk/ng-spinners)
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

## 🙌 Contributing

- Pull requests and ⭐ stars are always welcome.
- For bugs and feature requests, please create an issue.

## 👏🏻 Support my open-source
If you like to support my open-source contributions please star and share this project. 💫

## 📄 License
[MIT](https://github.com/JoshK2/ng-spinners/blob/master/LICENSE)

