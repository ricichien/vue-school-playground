import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const navigationBlockedRoute = '/navigation-blocked';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('../views/WelcomeView.vue')
  },
  {
    path: navigationBlockedRoute,
    name: 'navigation-blocked',
    component: () => import('../views/NavigationBlockedView.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isBlocked = JSON.parse(localStorage.getItem('navigationBlock') || 'false');
  console.log(`Tentativa de acessar rota '${to.path}'. Bloqueado: ${isBlocked}`);
  if (isBlocked && to.path !== navigationBlockedRoute) {
    console.log(`Navegação bloqueada. Redirecionando para ${navigationBlockedRoute}`);
    next(navigationBlockedRoute);
  } else {
    console.log(`Navegação permitida. Continuando para ${to.path}`);
    next();
  }
});

export default router;

