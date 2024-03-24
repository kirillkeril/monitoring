import {createRouter, createWebHistory} from 'vue-router';
import Index from "../Pages/Index.vue";
import AuthPage from "../Pages/AuthPage.vue";
import CalendarPage from "../Pages/CalendarPage.vue";
import AccountPage from "../Pages/AccountPage.vue";

const routes = [
	{
		path: '/',
		component: Index,
	},
	{
		path: '/auth',
		component: AuthPage,
	},
	{
		path: '/calendar',
		component: CalendarPage,
	},
	{
		path: '/account',
		component: AccountPage,
	},
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
