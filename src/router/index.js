import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddContact from '../components/AddContact.vue';
import ViewContacts from '../components/ViewContacts.vue';
import TodoList from '../components/TodoList.vue';
import NearSearch from '../components/NearSearch.vue';
import Login from '../views/1_login.vue'
import Favorites from '@/components/Favorites.vue';
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: 'Login', 
      },
      {
        path: '/view-contacts',
        name: 'ViewContacts',
        component: ViewContacts,
      },
      {
        path: '/add-contact',
        name: 'AddContact',
        component: AddContact,
      },
      {
        path: '/todo-list',
        name: 'TodoList',
        component: TodoList,
      },
      {
        path: '/near-search',
        name: 'NearSearch',
        component: NearSearch,
      },
      {
        path: '/favorites',
        name: 'Favorites',
        component: Favorites,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
