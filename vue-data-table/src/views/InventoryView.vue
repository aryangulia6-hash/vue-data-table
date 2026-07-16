<template>
  <div class="container">

    <h1 class="page-title">📦 Inventory Management</h1>

    <!-- Dashboard Cards -->
    <div class="cards">

      <DashboardCard
        title="Total Products"
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

    </div>

    <!-- Add Product Form -->

    <div class="form-card">

      <h2>Add New Product</h2>

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
          v-model="newProduct.stock"
          type="number"
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
        Add Product
      </button>

    </div>

    <!-- Data Table -->

    <BaseDataTable
      :columns="inventoryColumns"
      :rows="inventoryData"
      @edit="editItem"
      @delete="deleteItem"
    />

  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import BaseDataTable from "../components/BaseDataTable.vue";
import DashboardCard from "../components/DashboardCard.vue";

import {
  inventoryColumns,
  inventoryData
} from "../data/inventory.js";

// ===========================
// Dashboard Cards
// ===========================

const totalStock = computed(() => {

  return inventoryData.value.reduce(

    (sum, item) => sum + Number(item.stock),

    0

  );

});

const warehouseCount = computed(() => {

  const warehouses = new Set(

    inventoryData.value.map(item => item.location)

  );

  return warehouses.size;

});

// ===========================
// Add Product
// ===========================

const newProduct = ref({

  product: "",

  sku: "",

  stock: "",

  location: ""

});

function addProduct(){

  if(

    !newProduct.value.product ||

    !newProduct.value.sku ||

    !newProduct.value.stock ||

    !newProduct.value.location

  ){

    alert("Please fill all fields.");

    return;

  }

  inventoryData.value.push({

    product:newProduct.value.product,

    sku:newProduct.value.sku,

    stock:Number(newProduct.value.stock),

    location:newProduct.value.location

  });

  newProduct.value={

    product:"",

    sku:"",

    stock:"",

    location:""

  };

  alert("Product Added Successfully!");

}

// ===========================
// Edit Product
// ===========================

function editItem(row){

  const product = prompt("Product Name",row.product);
  if(product===null) return;

  const sku = prompt("SKU",row.sku);
  if(sku===null) return;

  const stock = prompt("Stock",row.stock);
  if(stock===null) return;

  const location = prompt("Warehouse",row.location);
  if(location===null) return;

  row.product=product;
  row.sku=sku;
  row.stock=Number(stock);
  row.location=location;

  alert("Product Updated Successfully!");

}

// ===========================
// Delete Product
// ===========================

function deleteItem(row){

  const confirmDelete=confirm(
    `Delete "${row.product}" ?`
  );

  if(!confirmDelete) return;

  const index=inventoryData.value.findIndex(
    item=>item.product===row.product
  );

  if(index!==-1){

    inventoryData.value.splice(index,1);

    alert("Product Deleted Successfully!");

  }

}
</script>

<style scoped>

.container{
    width:95%;
    margin:30px auto;
}

.page-title{
    font-size:34px;
    color:#1f2937;
    margin-bottom:25px;
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

    font-size:15px;

    outline:none;

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

    font-size:15px;

    font-weight:600;

}

.btn-success:hover{

    background:#15803d;

}

</style>