# React Component Library

Library showing proof of concept for generating a [React](http://reactjs.org) component library that can then be imported into low code tools such as [UI Bakery](http://uibakery.io)

## How This Repo Works

This repository uses [microbundle](https://github.com/developit/microbundle) which is an abstraction from [Rollup.js](http://rollupjs.org). To use microbundle you need only specify a few properties in your package.json. Additionally a switch or two and that's about it. Read the documentation for your environment.

## Developing Components

To watch this library while developing simply run the following command which runs <code>microbundle src/index.js</code>:

```sh
$ yarn start
```

The <code>public/index.html</code> file can be opened in your browser to view/test your components. This file is NOT used or bundled in the <code>dist</code> output it is merely here for testing your components in a browser. In most cases you'll be important this library into another that will live reload for you so the index file here is just for convenience.

When texting a component you will need to mount that component using React as you would typically.

```js
// Access your exported component from the window object.
const EvComponent = window.UBC.EvComponent;

// Mount/render the component at the root div element defined in your index.html file.
ReactDOM.render(EvComponent(), document.getElementById('root'));
```

## Building the Library

To build the library just run the following command which again runs <code>microbundle</code> underneath.

```sh
$ yarn build
```

## Using the Library

We won't cover the typical use case, that being imports, however the below describes how you can consume the **UMD Module** in your browser directly.

First you will need to create a reference to the library in your page.

```html
<script src="https://cdn.jsdelivr.net/gh/GITHUB_USER/REPO_NAME/dist/LIBRARY_NAME.umd.js"></script>
```
Now that we have a reference to our library we need merely reference the desired component from the window object.

```js
const MyComponent = window.LIBRARY_NAME.MyComponent;
```

From the above you can now use the component as you normally would passing in props as desired. You could also manually mount/render the component as we did in your <code>index.html</code> file.




