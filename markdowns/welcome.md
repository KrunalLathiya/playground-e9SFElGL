# Vuex Tutorial

Vuex is one of the Vue js’s model implementation, or we can say State of our data representation. So let us talk about Vuex with an example in deep.

The source code for this template is on [GitHub](https://github.com/TechDotIO/vuejs-template), please feel free to come up with proposals to improve it.

# Vuex
Vuex is a state management pattern + library. It is work as a centralized storage of our data for the whole application. The basic concept is derived from React’s Redux and Flux library. Vuex comes into the picture when our client side application becomes more and more complex. If our application is not more complex, then we should not use Vuex because after using it, if you will not handle it properly then It will become tedious and cumbersome.

It is a self-contained app with the following parts:

1. The state, which is the source of truth that drives our app;
2. The view, which is just a declarative mapping of the state;
3. The actions, which are the possible ways the state could change in reaction to user inputs from the view.

# State
If you are using Vuex, then you will have only one Single store for each VueJS powered application. Vuex Store is Singleton source of State. Our store contains application state. State management in VueJS with Vuex is straightforward. You just need to modify the state via dispatching the action and not directly because we want to predict the future states. Our store contains application state.

# Mutations
The only way to change the state in a Vuex store is by committing a mutation. We can directly change the state, but we will not do it because we need a snap shot for every step of our project. We need to predict the next state. For the debugging purpose, we will not mutate the state directly, but via mutations.

# Actions
Actions are similar to mutations, the differences being that:
1. Instead of mutating the state, actions commit mutations.
2. Actions can contain arbitrary asynchronous operations.

# Why you use and do not use Vuex?
As per the Author of Redux Mr. Dan Abramov, if your application has so many states and you can not handle with open library then and then, you need to use Redux, in our scope it is Vuex.
1. If the application gets bigger and bigger, then Vuex is the way to handle the data efficiently and log the every operation with the Vuex store.Vuex store.
2. The small application does not need Vuex.
3. If you want to share the state with the other fellow components then and then, you need to use Vuex. Shared state phenomenon uses this kind of libraries. So after understanding the project, if a particular state is consumed by multiple components then and then you have to use Vuex.

# Step 1: Configure VueJS Application.
We are using a simple VueJS 2.0 configuration. So I am writing one package.json file here, you just need to copy that file and paste it to your package.json file and if not there then create it manually and then copy paste that file.
```javascript
{
  "name": "vuexpro",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --inline --hot"
  },
  "author": "Krunal Lathiya",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.25.0",
    "babel-loader": "^7.1.1",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-3": "^6.24.1",
    "babel-runtime": "^6.25.0",
    "cross-env": "^5.0.5",
    "vue": "^2.4.2",
    "vue-loader": "^13.0.2",
    "vue-template-compiler": "^2.4.2",
    "vuex": "^2.3.1",
    "webpack": "^3.4.1",
    "webpack-dev-server": "^2.6.1"
  }
}
```
Make sure that you will open CMD as an administrator mode in Windows or put sudo before command if you are using Mac.
```javascript
npm install
```
It will install all of our dependencies including Vuex library.
Now, we need to create a webpack.config.js file for configuring webpack server. Copy the following content in it.
```javascript
// webpack.config.js

module.exports = {
  // This is the "main" file which should include all other modules
  entry: './src/main.js',
  // Where should the compiled file go?
  output: {
    filename: 'bundle.js'
  },
  resolve: {
  alias: {
    vue: 'vue/dist/vue.js'
  }
},
  module: {
    // Special compilation rules
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel-loader',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
      {
        // Ask webpack to check: If this file ends with .vue, then apply some transforms
        test: /\.vue$/,
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /(node_modules|bower_components)/,
        // Transform it with vue
      use: {
        loader: 'vue-loader'
      }
    }
  ]
}
}
```
# Step 2: Make index.html and main.js files.
We have configured the development environment and put the following content in it.
```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Vuex Tutorial Example From Scratch</title>
    <link rel="stylesheet" href="bulma.css" />
  </head>
  <body style="overflow-y: hidden;">
    <div id="app">
    </div>
    <script src="bundle.js"></script>
  </body>
</html>
```
For this project, I have used a Flex CSS Framework called Bulma.
I have included bundle.js file in this file because after all, this is the file we need it finally to up and running with all of our JavaScript code.
Also, I have created a div element with an ID of the app.
```javascript
// main.js

import Vue from 'vue';

new Vue({
  el: '#app'
});
```

Create one folder called src inside root directory. Inside that directory, create one file called main.js
@[Sample Vue.js App]({"stubs": ["index.html", "main.js"], "command": "/bin/bash run.sh"})

Check out the markdown file [`welcome.md`](https://github.com/TechDotIO/vuejs-template/blob/master/markdowns/welcome.md) to see how this exercise is injected into the template.

# Template Resources

[`markdowns/welcome.md`](https://github.com/TechDotIO/vuejs-template/blob/master/markdowns/welcome.md)  
What you are reading here is generated by this file. Tech.io uses the [Markdown syntax](https://tech.io/doc/reference-markdowns) to render text, media and to inject programming exercises.


[`vuejs-project`](https://github.com/TechDotIO/vuejs-template/tree/master/vuejs-project)  
A simple Vue.js project dedicated to run the exercise above. A project relies on a Docker image to run. You can find images on the [Docker Hub](https://hub.docker.com/explore/) or you can even [build your own](https://tech.io/doc/reference-runner).


[`techio.yml`](https://github.com/TechDotIO/vuejs-template/blob/master/techio.yml)  
This *mandatory* file describes both the table of content and the programming project(s). The file path should not be changed.


# Advanced Tech.io features

Tech.io provides all the tools to make great online hands-on content, quizzes, web consoles, and visual content. Please refer to the [documentation](https://tech.io/doc) to learn more about the possibilities.