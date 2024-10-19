import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import DashboardLayout from '../layouts/DashboardLayout.vue';
import ProfilePage from '../views/ProfilePage.vue';
import PortfolioPage from '../views/PortfolioPage.vue';
import ContactPage from '../views/ContactPage.vue';
import AboutMePage from '../views/AboutMePage.vue';
import DashboardHome from '../views/DashboardHome.vue'; // Import your dashboard home component

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardLayout,
    children: [
      {
        path: 'home', // Default route for the dashboard home page
        name: 'Home', // This will be used to conditionally show the welcome header
        component: DashboardHome, // Component to render on the dashboard home
      },
      {
        path: 'aboutme', // Ensure the path is correct
        name: 'AboutMe', // Updated to match conventional naming
        component: AboutMePage,
      },
      {
        path: 'profile',
        name: 'Profile',
        component: ProfilePage,
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: PortfolioPage,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: ContactPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
