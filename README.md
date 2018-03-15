# controlled_component
Working with controlled component in reactjs. Letting reactjs control input elements for component monitoring.
By controlled component the source of truth is delegated to the parent component that handles the state which is the used as the props for any embedded component in the main component.
This sample makes use of react default data management structure which is handling the state within the component, it does not use any third party state management library like immutability or redux.

```
npm install
```
```
npm install react react-dom --save
```
### We are going to be making use of loaders, Babel loader for Webpack as a development dependency
#### Check out the Webpack config file on how to put these together.
```
npm install --save-dev babel-loader
```
### babel preset for ECMA2015 environment to support some es6 syntax and other for react environment
```
npm install --save-dev babel-preset-env babel-preset-react
```
```
npm install webpack -g
```
### This could also be thrown in the dev dependency object
```
npm install --save-dev webpack
```
### Then finally start webpack to transpile our code into forms that is understood by basic browsers.

```
webpack
```
### A little bit of extra, you could decide to run a dev server in hot mode instead of firing up the app in other local local server.
#### Installation...
```
npm install --save-dev webpack-dev-server 
```
#### execution...
#### Including this piece of code in the package.json
```
'scripts': { start : webpack-dev-server --hot }
```
#### ANd then run
```
npm start
```
