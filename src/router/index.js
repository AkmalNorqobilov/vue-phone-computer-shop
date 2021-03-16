import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import adminPhone from '../components/administrator/NewAdd/Phone.vue';
// import adminLaptop from '../components/administrator/NewAdd/Laptop.vue';
// import adminDevice from '../components/administrator/NewAdd/Device.vue';
// import createLaptop from '../components/administrator/NewAdd/createLaptop.vue';
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    component:  ()=> import('../components/register/Signup.vue')
  },
  
  {
    path: '/signin',
    component:  ()=> import('../components/register/Signin.vue')
  },
  {
    path: '/administrator',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    meta:{auth:true}
  },
  {
    path:'/administrator/laptop/',
    name:'Laptop',
    component: ()=> import(`../components/administrator/NewAdd/Laptop/Laptop.vue`)
    
  },
  {
    path:'/administrator/laptop/create',
    name:'createLaptop',
    component: ()=> import('../components/administrator/NewAdd/Laptop/LaptopCreate.vue'),
  },
  {
    path:'/administrator/laptop/view/:id',
    component:()=>import('../components/administrator/NewAdd/Laptop/LaptopView.vue'),
    children:[
      {
        path:'/administrator/laptop/update/:id',
        component: import('../components/administrator/NewAdd/Laptop/LaptopUpdate.vue')
      }
    ]
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some(record => record.meta.auth)){
    next();
  }
  else
  next();
})
export default router
