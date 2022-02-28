/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 window.Vue = require('vue').default;;
 import VueRouter from 'vue-router';
 
 window.Vue.use(VueRouter);

 import VueHtmlToPaper from 'vue-html-to-paper';
 Vue.use(VueHtmlToPaper, options);
 import EmployeesIndex from './components/employees/EmployeesIndex.vue';
 import EmployeesCreate from './components/employees/createEmployee.vue';
 import EmployeesEdit from './components/employees/editEmployee.vue';
 import imp from './components/employees/import.vue';
 
 const options = {
    name: '_blank',
    specs: [
      'fullscreen=yes',
      'titlebar=no',
      'scrollbars=no',
    ],
    styles: [
      'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
      'https://unpkg.com/kidlat-css/css/kidlat.css'
    ]
  }

 const routes = [
     {
         path: '/',
         components: {
             employeeIndex: EmployeesIndex
         }
     },
     {path: '/admin/employees/create', component: EmployeesCreate, name: 'createEmployee'},
     {path: '/admin/employees/edit/:id', component: EmployeesEdit, name: 'editEmployee'},
     {path: '/admin/employees/import', component: imp, name: 'importEmployee'}
 ]
 
 const router = new VueRouter({  
    routes
 })
 
 const app = new Vue({ router }).$mount('#app')