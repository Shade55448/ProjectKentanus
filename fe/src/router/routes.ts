import type { RouteRecordRaw } from 'vue-router';

const applicationViews = [
	{
		name: 'signIn',
		path: '/sign-in',
		component: () => import('../views/Home.vue'),
	},
];

export const routes: RouteRecordRaw[] = [
	{
		path: '',
		component: () => import('../layouts/LayoutDefault.vue'),
		children: applicationViews,
	},
	// {
	// 	name: 'pageNotFound',
	// 	path: '/:pathMatch(.*)*',
	// 	component: () => import('../views/errors/PageNotFound.vue'),
	// },
];
