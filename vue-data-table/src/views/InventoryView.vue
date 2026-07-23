<template>
  <div class="container">

    <h1 class="page-title">📦 Inventory Management</h1>

    <!-- Dashboard -->

    <div class="cards">

      <DashboardCard
        title="Products"
        :value="inventoryData.length"
        icon="📦"
      />

      <DashboardCard
        title="Total Stock"
        :value="totalStock"
        icon="📈"
      />

      <DashboardCard
        title="Warehouses"
        :value="warehouseCount"
        icon="🏢"
      />

      <DashboardCard
        title="Average Stock"
        :value="averageStock"
        icon="📊"
      />

    </div>

    <!-- Add Product -->

    <div class="form-card">

      <h2>Add Product</h2>

      <div class="form-grid">

        <input
          v-model="newProduct.product"
          placeholder="Product Name"
        />

        <input
          v-model="newProduct.sku"
          placeholder="SKU"
        />

        <input
          type="number"
          v-model="newProduct.stock"
          placeholder="Stock"
        />

        <input
          v-model="newProduct.location"
          placeholder="Warehouse"
        />

      </div>

      <button
        class="btn-success"
        @click="addProduct"
      >
        + Add Product
      </button>

    </div>

    <!-- Data Table -->

    <BaseDataTable
      :columns="inventoryColumns"
      :rows="inventoryData"
      @edit="openEdit"
      @delete="openDelete"
    />

    <!-- Edit Modal -->

    <EditModal
      :show="showEdit"
      :row="selectedProduct"
      :columns="inventoryColumns"
      @save="saveProduct"
      @close="showEdit=false"
    />

    <!-- Delete Modal -->

    <DeleteModal
      :show="showDelete"
      @confirm="deleteProduct"
      @close="showDelete=false"
    />

  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";

import BaseDataTable from "../components/BaseDataTable.vue";
import DashboardCard from "../components/DashboardCard.vue";
import EditModal from "../components/EditModal.vue";
import DeleteModal from "../components/DeleteModal.vue";

import {
  inventoryColumns,
  inventoryData
} from "../data/inventory.js";

// =====================
// Local Storage
// =====================

const STORAGE_KEY = "inventoryData";

onMounted(() => {

  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {

    inventoryData.value = JSON.parse(saved);

  }

});

watch(
  inventoryData,
  (value) => {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(value)
    );

  },
  { deep: true }
);

// =====================
// Dashboard
// =====================

const totalStock = computed(() =>

  inventoryData.value.reduce(
    (sum, item) => sum + Number(item.stock),
    0
  )

);

const warehouseCount = computed(() =>

  new Set(
    inventoryData.value.map(
      item => item.location
    )
  ).size

);

const averageStock = computed(() => {

  if (inventoryData.value.length === 0)
    return 0;

  return Math.round(

    totalStock.value /

    inventoryData.value.length

  );

});

// =====================
// Add Product
// =====================

const newProduct = ref({

  product: "",
  sku: "",
  stock: "",
  location: ""

});

function addProduct() {

  if (

    !newProduct.value.product ||

    !newProduct.value.sku ||

    !newProduct.value.stock ||

    !newProduct.value.location

  ) {

    alert("Please fill all fields.");

    return;

  }

  inventoryData.value.push({

    id: Date.now(),

    product: newProduct.value.product,

    sku: newProduct.value.sku,

    stock: Number(newProduct.value.stock),

    location: newProduct.value.location

  });

  newProduct.value = {

    product: "",

    sku: "",

    stock: "",

    location: ""

  };

}

// =====================
// Edit Product
// =====================

const showEdit = ref(false);

const selectedProduct = ref(null);

function openEdit(row) {

  selectedProduct.value = { ...row };

  showEdit.value = true;

}

function saveProduct(updatedProduct) {

  const index = inventoryData.value.findIndex(

    item => item.id === updatedProduct.id

  );

  if (index !== -1) {

    Object.assign(

      inventoryData.value[index],

      updatedProduct

    );

    alert("Product updated successfully!");

  }

  showEdit.value = false;

}

// =====================
// Delete Product
// =====================

const showDelete = ref(false);

const productToDelete = ref(null);

function openDelete(row) {

  productToDelete.value = row;

  showDelete.value = true;

}

function deleteProduct() {

  const index = inventoryData.value.findIndex(

    item => item.id === productToDelete.value.id

  );

  if (index !== -1) {

    inventoryData.value.splice(index, 1);

    alert("Product deleted successfully!");

  }

  showDelete.value = false;

}

</script>

<style scoped>

.container{
    width:95%;
    margin:30px auto;
}

.page-title{
    font-size:34px;
    margin-bottom:25px;
    color:#1f2937;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
    gap:20px;
    margin-bottom:30px;
}

.form-card{
    background:white;
    padding:25px;
    border-radius:15px;
    margin-bottom:30px;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
}

.form-card h2{
    margin-bottom:20px;
}

.form-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:15px;
    margin-bottom:20px;
}

.form-grid input{
    padding:12px;
    border:1px solid #d1d5db;
    border-radius:8px;
    outline:none;
    font-size:15px;
}

.form-grid input:focus{
    border-color:#2563eb;
    box-shadow:0 0 6px rgba(37,99,235,.3);
}

.btn-success{
    background:#16a34a;
    color:white;
    border:none;
    padding:12px 22px;
    border-radius:8px;
    cursor:pointer;
    font-weight:600;
}

.btn-success:hover{
    background:#15803d;
}

</style>