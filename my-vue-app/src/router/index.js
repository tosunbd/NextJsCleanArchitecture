import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';
import Dashboard from '../views/DashboardView.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', redirect: '/login' }, // Redirect to login as default
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      { path: 'dashboard', component: Dashboard },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
