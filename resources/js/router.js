import { createRouter, createWebHistory } from 'vue-router';

import UserLogin from './components/pages/userLogin.vue'
import ResisterLogin from './components/pages/userRegister.vue'
import Home from './components/pages/home-product.vue'
import SideCart from './components/pages/sidebar/sideCart.vue'
import OrderDetails from './components/pages/order-details.vue'
import ShopPage from './components/pages/shop.vue'
import LocationPage from './components/pages/location.vue'
import Faq from './components/pages/faq.vue'
import About from './components/pages/about.vue'
import Contact from './components/pages/contact.vue'
import userDashboard from './components/user/userDashboard.vue'


//import mainapp from './components/mainapp.vue'
//import login from './admin/pages/login.vue'



const routes = [
 
  { 
    path: '/', 
    name: '/home',
    component: Home,
    meta: {
      title: 'Shop Today',
    }
  },

  { 
    path: '/faq', 
    name: 'FAQ',
    component: Faq,
    meta: {
      title: 'Shop Today-Help',
    }
  },

  { 
    path: '/about', 
    name: 'About',
    component: About,
    meta: {
      title: 'Shop Today-About Us',
    }
  },

  { 
    path: '/contact', 
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Shop Today-Contact Us',
    }
  },

  { 
    path: '/shop', 
    name: '/shop',
    component: ShopPage  
  },
  { 
    path: '/location', 
    name: '/location',
    component: LocationPage  
  },
  { 
    path: '/user-login', 
    name: '/user-login',
    component: UserLogin 
  },

  { 
    path: '/resister-user', 
    name: '/resister-user',
    component: ResisterLogin 
  },
  { 
    path: '/user-dashboard', 
    name: '/userDashboard',
    component: userDashboard 
  },

  //Order
  { 
    path: '/order-details', 
    name: '/OrderDetails',
    component: OrderDetails 
  },

 
  { 
    path: '/cart', 
    name: '/cart',
    component: SideCart 
  },
 



  // {
  //   path: '/:pathMatch(.*)*',
  //   name: '/home',
  //   component: HomeProduct
  // },
  
]
  
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(process.env.Base_URL),
    routes: routes, // short for `routes: routes`
  
  })

  router.beforeEach((to,from,next) => {
    if(to.meta.title){
      document.title = `${to.meta.title}`;
    } else {
      document.title = "E-Commerce";
    }
    
    next();
  });

  export default router