/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const utilityComponent = {
  path: '/utilityComponent',
  component: Layout,
  redirect: 'noRedirect',
  name: 'utilityComponent',
  meta: { title: 'utilityComponent', icon: 'component' },
  children: [
    {
      path: 'Group',
      name: 'Group',
      component: () => import('@/views/utilityComponent/Group/index'),
      meta: { title: 'Group', icon: 'user', noCache: true }
    },
    {
      path: 'TableProgressBar',
      name: 'TableProgressBar',
      component: () => import('@/views/utilityComponent/TableProgressBar/index'),
      meta: { title: 'TableProgressBar', icon: 'user', noCache: true }
    },
    {
      path: 'TreeSelect',
      name: 'TreeSelect',
      component: () => import('@/views/utilityComponent/TreeSelect/index'),
      meta: { title: 'TreeSelect', icon: 'user', noCache: true }
    }
  ]
}

export default utilityComponent

