import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from './components/pages/AdminDashboard.vue';
import ManageProducts from './components/pages/ManageProducts.vue';
import ManageReviews from './components/pages/ManageReviews.vue';
const routes = [
    {
        path: '/',
        component: AdminDashboard, // Використовуємо AdminDashboard як головний компонент
        children: [
            { path: '', component: ManageProducts }, // Домашня сторінка рендерить ManageProducts
            { path: 'reviews', component: ManageReviews }, // Відгуки
        ],
    },
    {
        path: '/admin',
        component: AdminDashboard,
        children: [
            { path: 'products', component: ManageProducts },
            { path: 'reviews', component: ManageReviews },
        ],
    },
];

const router = createRouter({
    history: createWebHistory('/my-shop/'), // Вказуємо базовий шлях для GitHub Pages
    routes,
});

export default router; 