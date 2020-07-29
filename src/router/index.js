import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import Сontacts from '../views/Contacts.vue'

Vue.use(VueRouter)

export const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/catalog',
		name: 'Catalog',
		component: Catalog
	},
	{
		path: '/contacts',
		name: 'Сontacts',
		component: Сontacts
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
