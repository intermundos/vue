import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw }            from 'vue-router'

const appLayout = () => import( '@ui/layouts/app.layout.vue' )

const routes: RouteRecordRaw[] = [

    {
        path: '/',
        component: appLayout,
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@views/home/home.view.vue'),
            }
        ]
    },

    {
        path: '/other',
        component: appLayout,
        children: [
            {
                path: '',
                name: 'other',
                component: () => import('@views/other/other.view.vue'),
            }
        ]
    },


    // 404
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import( '@views/service-views/404.vue')
    },
]

const router = createRouter( {
    history: createWebHistory(),
    routes,
    scrollBehavior( to, from, savedPosition ) {
        if ( savedPosition ) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
} )

router.afterEach( ( to, from ) => {
    document.body.classList.add( to?.name as string )
    document.body.classList.remove( from?.name as string )
} )

export { router }
