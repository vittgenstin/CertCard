// Just a mock data
export const constantRoutes = [
    {
        path: '/redirect',
        component: 'layout/Layout',
        hidden: true,
        children: [
            {
                path: '/redirect/:path*',
                component: 'view/redirect/index',
            },
        ],
    },
    {
        path: '/login',
        component: 'views/login/index',
        hidden: true,
    },
];

export const asyncRoutes = [
    {
        path: '/guide',
        component: 'layout/Layout',
        redirect: '/guide/index',
        alwaysShow: true,
        meta: {
            title: 'Guide',
            icon: 'lock',
            roles: ['admin'],
        },
    },
];
