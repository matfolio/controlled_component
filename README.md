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
