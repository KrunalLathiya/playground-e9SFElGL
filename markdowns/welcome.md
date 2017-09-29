# Vuex Tutorial

Vuex is one of the Vue js’s model implementation, or we can say State of our data representation. So let us talk about Vuex with an example in deep.

The source code for this article is on [GitHub](https://github.com/KrunalLathiya/playground-e9SFElGL)

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
Here, I have to create vue object and pass it one parameter, which is bound to that DOM element.
Inside src folder, create one vue component called App.vue.
Create one folder called src inside root directory. Inside that directory, create one file called main.js
```javascript
// App.vue

<template>
  <div class="container">
    Welcome to App Component.
  </div>
</template>

<script>
export default {

}
</script>
```
Include this component in the main.js file.
```javascript
// main.js

import Vue from 'vue';
import App from './src/App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});
```
It will output like “Welcome to App Component.” 

# Step 3: Create a Vuex Store.
Next step will be to create our Vuex store. So in the src directory, create one folder called the store.Vuex store. So in the src directory, create one folder called the store.

In that, create one file called store.js. Both folder name and the file name is same.
```javascript
// store.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    
});
```
Here, I have imported Vuex store and used in Vue library. We just pass this store, while creating vue instance in the main.js file. Vuex store and used in Vue library. We just pass this store, while creating vue instance in the main.js file.
```javascript
// main.js

import Vue from 'vue';
import App from './App.vue';
import store from './store/store.js'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
```
So we have passed our application state to our main vuejs application. Now, we can access its data with the proper methods and proper Vuex flow.

We are building the simple counter application. So first we need to define one state in the store.js file.
```javascript
// store.js

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  }
})
export default store;
```
Vuex store is our main application store. It is the single source of truth. All of our application data will be handled by this store. is our main application store. It is the single source of truth. All of our application data will be handled by this store.
In the store, there is state object, which has one object called count. Our main data is right now count because It will be incremented or decremented in future. So single source of truth is count.
We have initialized count with 0.
We are passing the global store into our Vue application instance so that our all child components can access it.
```javascript
// main.js

import Vue from 'vue';
import store from './store/store';
import App from './App.vue';

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
```
# Step 4: Make two components: Add and Remove Counter.
Our primary application is to increment or decrement the count. We need to dispatch two actions.
1. Increment
2. Decrement
We also need to create two vue components inside components folder.
1. AddCounter.vue
2. RemoveCounter.vue
```javascript
// AddCounter.vue

<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary">Add</button>
      </div>
  </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>
```
Same as RemoveCounter.vue.
```javascript
// RemoveCounter.vue

<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary">Remove</button>
      </div>
  </div>
  </div>
</template>

<script>
import store from '../store/store';

  export default {
   
  }
</script>
```
We also need to Display the counter, so what we need is that Counter component called Counter.vue file inside components folder.
```javascript
/ Counter.vue

<template>
  <div class="cotainer">
    <div class="notification">
      <h1 class="title" align="center">
        {{ count }}
      </h1>
    </div>
  </div>
</template>
<script>


export default {
 data: {
   count: 0
 }
}
</script>
```
All these components will be included in the App.vue file to display the whole application.
```javascript
// App.vue

<template>
  <div class="container">
    <Counter></Counter><br />
    <div class="columns">
      <div class="column is-11">
        <AddCounter></AddCounter>
      </div>
      <div class="column auto">
        <RemoveCounter></RemoveCounter>
      </div>
    </div>
 </div>
</template>
<script>
import Counter from './components/Counter.vue';
import AddCounter from './components/AddCounter.vue';
import RemoveCounter from './components/RemoveCounter.vue';

  export default {
    components : {
      Counter,
      AddCounter,
      RemoveCounter
    }
  }
</script>
```
# Step 5: Create Mutations and Actions.
Inside store folder, we are creating one more folder called mutation types and in that create one JavaScript file called types.js. In this file, we are defining our mutation’s type meaning regarding our application is that we need to export two mutation types name. Increment and Decrement.
```javascript
// types.js

export const Increment = 'increment';
export const Decrement = 'decrement';
```
Now, If the user clicks the Add button then one action will be triggered, and that action commits the mutation and state changes and according to that UI will change.
```javascript
// AddCounter.vue

<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" v-on:click="addCounter()">Add</button>
      </div>
  </div>
  </div>
</template>

<script>
import store from '../store/store';
import * as type from '../store/mutationTypes/types';

  export default {
    methods: {
        addCounter(){
          store.dispatch({
            type: type.Increment,
            amount: 20
          })
        }
    }
  }
</script>
```
Here on button click, and addCounter function will be called, and then that function will dispatch the action type and payload. Switch to the store.js file, We need to add one action, and that action will commit the mutation.
```javascript
// AddCounter.vue

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
    actions: {
    increment (context, payload) {
      context.commit('increment', payload)
  }
})
export default store;
```
So, we need to create one mutation called ‘increment.’ Remeber, we can not change the state in action, for that, we have to call mutation function to change the state.
```javascript
// AddCounter.vue

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload){
      return state.count = state.count + payload.amount;
    }
  },
  actions: {
    increment (context, payload) {
      context.commit('increment', payload)
  }
})
export default store;
```
We are calling mutation function with the payload. A payload is the data, which is needed to change the counter. In our application, I have put 20 amount to increment the counter.

Now, we need to update Counter.vue file to show the updated counter.
```javascript
// Counter.vue

<template>
  <div class="cotainer">
    <div class="notification">
      <h1 class="title" align="center">
        {{ count }}
      </h1>
    </div>
  </div>
</template>
<script>

import { mapState } from 'vuex';

export default {
  computed: mapState({
      count: state => state.count
})
</script>
```
If you will start the webpack-dev-server by typing npm start command, our server had hosted the index.html file at the port 8080.
# Step 6: Follow the same step of Increment to Decrement.
We need to Decrement the counter by following the same step as we have followed in the Increment step.  Go to the RemoveCounter.vue file and write the code that adds remove counter function.
```javascript
// RemoveCounter.vue

<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" v-on:click="removeCounter()">Remove</button>
      </div>
  </div>
  </div>
</template>

<script>
import store from '../store/store';
import * as type from '../store/mutationTypes/types';

  export default {
    methods: {
        removeCounter(){
          store.dispatch({
            type: type.Decrement,
            amount: 20
          })
        }
    }
  }
</script>
```
Modify the store.js file and add the decrement action as well as decrement counter mutation.
I am showing the whole final store.js file.
```javascript
// store.js

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload){
      return state.count = state.count + payload.amount;
    },
    decrement (state, payload){
      return state.count = state.count - payload.amount;
    }
  },
    actions: {
    increment (context, payload) {
      context.commit('increment', payload)
    },
    decrement (context, payload) {
      context.commit('decrement', payload)
    }
  }
})
export default store;
```
So, at last, the application will look like below. You can increment the counter from one component and decrement counter from another element.

We have used mapState(), a helper, because When our component needs to make use of multiple store state getters then To deal with this, we can make use of the which generatesmapState computed getter functions for us.
You can run this first part of this project.
@[Sample Vue.js App]({"stubs": ["main.js", "src/App.vue","src/components/AddCounter.vue","src/components/Counter.vue","src/components/RemoveCounter.vue","src/store/store.js","src/store/mutationTypes/types.js","index.html"], "command": "/bin/bash run.sh"})