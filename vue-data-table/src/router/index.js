import { createRouter, createWebHistory } from "vue-router";

import EmployeeView from "../views/EmployeeView.vue";
import InventoryView from "../views/InventoryView.vue";
import LibraryView from "../views/LibraryView.vue";



const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path:"/",
      component: EmployeeView
    },
    {
      path:"/inventory",
      component: InventoryView
    },
    {
      path:"/library",
      component: LibraryView
    },
    
  ]
});

export default router;