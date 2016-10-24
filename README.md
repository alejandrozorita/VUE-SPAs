# VUE-SPAs
Desarrollo de una SPA usando VUE.JS


## Instalamos https://github.com/vuejs/vue-loader

Ejecutamos desde la consola:
	npm install -g vue-cli
	vue init webpack spa
	cd spa
	npm install
	npm run dev


Despues instalamos 2 componenetes más que necesitaremos
	npm install vue-resource vue-router --save


Declaramos el fichero main.js
	
	// src/main.js
	import Vue from 'vue'
	import App from './App.vue'
	import Hello from './components/Hello.vue'

	import VueRouter from 'vue-router'
	import VueResource from 'vue-resource'

	//Instanciamos VueResource para VueRouter
	//Para usarlo en este proyecto
	Vue.use(VueResource)
	Vue.use(VueRouter)

	const router = new VueRouter()

	// Para puntar alas rutas y componenetes, usaremos
	router.map({
	  '/hello': {
	    component: Hello
	  }
	})

	// En caso de usar una ruta no valida, redireccionaremos a
	router.redirect({
	  '*': '/hello'
	})

	router.start(App, '#app')