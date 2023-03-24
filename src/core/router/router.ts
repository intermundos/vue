import { createRouter, createWebHistory } from 'vue-router'

const appLayout = () => import( '@ui/layouts/app.layout.vue' )

const routes = [

    {
        path: '/',
        redirect: '/summary'
    },

    {
        path: '/summary',
        component: appLayout,
        children: [
            {
                path: '',
                name: 'summary',
                component: () => import('@views/summary/summary.view.vue'),
            }
        ]
    },


    // 404
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        // component: () => import( `@views/service-views/404.vue` )
    },
]

const router = createRouter( {
    history: createWebHistory(),
    // @ts-ignore
    routes,
    // scrollBehavior( to, from, savedPosition ) {
    //     if ( savedPosition ) {
    //         return savedPosition
    //     } else {
    //         return { top: 0 }
    //     }
    // }
} )

// router.afterEach( ( to, from ) => {
//     document.body.classList.add( to?.name as string )
//     document.body.classList.remove( from?.name as string )
// } )

export { router }
