import { createRouter, createWebHistory } from "vue-router";

import InventoryView from "../views/InventoryView.vue";
import EmployeeView from "../views/EmployeeView.vue";
import LibraryView from "../views/LibraryView.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      component: InventoryView
    },
    {
      path: "/employee",
      component: EmployeeView
    },
    {
      path: "/library",
      component: LibraryView
    }
  ]
});

export default router;