import { createRouter, createWebHistory } from "vue-router";

import InventoryView from "../views/InventoryView.vue";
import EmployeeView from "../views/EmployeeView.vue";
import LibraryView from "../views/LibraryView.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "Inventory",
      component: InventoryView,
    },

    {
      path: "/employee",
      name: "Employee",
      component: EmployeeView,
    },

    {
      path: "/library",
      name: "Library",
      component: LibraryView,
    },
  ],
});

export default router;