import Vue from 'vue'
import Router from 'vue-router'
import Preach from '@/components/Preach'
import JobHunting from '@/components/JobHunting'
import CampusRecruitment from '@/components/CampusRecruitment'
import Internship from '@/components/Internship'
import SearchBar from '@/components/SearchBar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CampusRecruitment',
      component: CampusRecruitment
    } , {
      path: '/preach',
      name: 'Preach',
      component: Preach
    } , {
      path: '/jobhunting',
      name: 'JobHunting',
      component: JobHunting
    },  {
      path: '/internship',
      name: 'Internship',
      component: Internship
    }, {
      path: '/search',
      name: 'SearchBar',
      component: SearchBar
    }
  ]
})

// export default new Router({
//   routes: [
//      {
//       path: '/',
//       name: 'CampusRecruitment',
//       component: CampusRecruitment,
//       children: [
//         {
//           path: '/navigator',
//           name: 'Navigator',
//           component: Navigator
//         }
//       ]
//     } , {
//       path: '/preach',
//       name: 'Preach',
//       component: Preach
//     } , {
//       path: '/jobhunting',
//       name: 'JobHunting',
//       component: JobHunting
//     },  {
//       path: '/internship',
//       name: 'Internship',
//       component: Internship
//     }
//   ]
// })
