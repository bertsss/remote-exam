import Vue from 'vue'
import VueRouter from 'vue-router'

import Orders from '@/pages/Orders.vue'
import Customers from '@/pages/Customers.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Users from '@/pages/Suppliers.vue'
import Catalog from '@/pages/Catalog.vue'
import Companies from '@/pages/Companies.vue'
import Suppliers from '@/pages/Suppliers.vue'
import PriceLists from '@/pages/PriceLists.vue'

Vue.use(VueRouter)


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'dashboard'
        },

        {
            path: '/suppliers',
            component: Suppliers,
            name: 'suppliers'
        },

        {
            path: '/catalog',
            component: Catalog,
            name: 'catalog'
        },

        {
            path: '/customers',
            component: Customers,
            name: 'customers'
        },

        {
            path: '/orders',
            component: Orders,
            name: 'orders'
        },

        {
            path: '/companies',
            component: Companies,
            name: 'companies'
        },

        {
            path: '/users',
            component: Users,
            name: 'users'
        },

        {
            path: '/price-lists',
            component: PriceLists,
            name: 'price-lists'
        }
    ]
})
