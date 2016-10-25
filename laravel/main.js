var Vue = require('vue');
var VueRouter = require('vue-router');


var App = Vue.extend({});

var router = new VueRouter();

var Home = Vue.extend({
  template: 'Welcome to the <b>home page</b>!';
});

var People = Vue.extend({
  template: 'Look at all the people who work here!';
});

router.map({
  '/': {
    component: Home
  },
  '/people': {
    component: People
  }
});

router.start(App, '#app');


Vue.use(VueRouter);