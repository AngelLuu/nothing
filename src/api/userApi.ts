export const menuList = ()=>{
    const list = [
        {
          path: '/index',
          name: 'index',
          meta: {
            locale: '首页',
            requiresAuth: true,
            icon: 'icon-dashboard',
            order: 1,
          },
          children: [
            {
              path: '',
              name: 'Workplace',
              meta: {
                locale: '数据屏',
                requiresAuth: true,
              },
            }],
        },{
            path:'/system',
            name:'system',
            meta:{
                locale:'系统设置',
                requiresAuth: true,
                icon: 'icon-dashboard',
            },
            children:[
                {
                    path:'/user',
                    name:'user',
                    meta:{
                        locale:'用户设置',
                        requiresAuth: true,
                    }
                },{
                    path:'/menu',
                    name:'menu',
                    meta:{
                        locale:'菜单设置',
                    }
                },{
                    path:'/role',
                    name:'role',
                    meta:{
                        locale:'角色设置'
                    }
                }
            ]
        }
      ]
    return list
}