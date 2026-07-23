<template>
  <div class="container">

    <h1 class="page-title">👨‍💼 Employee Payroll Management</h1>

    <!-- Dashboard -->

    <div class="cards">

      <DashboardCard
        title="Employees"
        :value="employeeData.length"
        icon="👨‍💼"
      />

      <DashboardCard
        title="Total Salary"
        :value="'₹ ' + totalSalary.toLocaleString()"
        icon="💰"
      />

      <DashboardCard
        title="Departments"
        :value="departmentCount"
        icon="🏢"
      />

      <DashboardCard
        title="Average Salary"
        :value="'₹ ' + averageSalary.toLocaleString()"
        icon="📈"
      />

    </div>

    <!-- Add Employee -->

    <div class="form-card">

      <h2>Add Employee</h2>

      <div class="form-grid">

        <input
          v-model="newEmployee.name"
          placeholder="Employee Name"
        />

        <input
          v-model="newEmployee.department"
          placeholder="Department"
        />

        <input
          v-model.number="newEmployee.salary"
          type="number"
          placeholder="Salary"
        />

        <input
          v-model.number="newEmployee.tax"
          type="number"
          placeholder="Tax"
        />

        <input
          v-model.number="newEmployee.netPay"
          type="number"
          placeholder="Net Pay"
        />

      </div>

      <button
        class="btn-success"
        @click="addEmployee"
      >
        + Add Employee
      </button>

    </div>

    <!-- Employee Table -->

    <BaseDataTable
      :columns="employeeColumns"
      :rows="employeeData"
      @edit="openEdit"
      @delete="openDelete"
    />

    <!-- Edit Modal -->

    <EditModal
      :show="showEdit"
      :row="selectedEmployee"
      :columns="employeeColumns"
      @close="showEdit=false"
      @save="saveEmployee"
    />

    <!-- Delete Modal -->

    <DeleteModal
      :show="showDelete"
      @close="showDelete=false"
      @confirm="deleteEmployee"
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
  employeeColumns,
  employeeData
} from "../data/employee.js";

// ===============================
// Local Storage
// ===============================

const STORAGE_KEY = "employeeData";

onMounted(() => {

  const saved = localStorage.getItem(STORAGE_KEY);

  if(saved){

    employeeData.value = JSON.parse(saved);

  }

});

watch(

  employeeData,

  (value)=>{

    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(value)

    );

  },

  {deep:true}

);

// ===============================
// Dashboard
// ===============================

const totalSalary = computed(()=>{

  return employeeData.value.reduce(

    (sum,emp)=>sum+Number(emp.salary),

    0

  );

});

const departmentCount = computed(()=>{

  return new Set(

    employeeData.value.map(

      emp=>emp.department

    )

  ).size;

});

const averageSalary = computed(()=>{

  if(employeeData.value.length===0)

    return 0;

  return Math.round(

    totalSalary.value/

    employeeData.value.length

  );

});

// ===============================
// Add Employee
// ===============================

const newEmployee = ref({

  id:"",
  name:"",
  department:"",
  salary:"",
  tax:"",
  netPay:""

});

function addEmployee(){

  if(

    !newEmployee.value.name ||

    !newEmployee.value.department ||

    newEmployee.value.salary==="" ||

    newEmployee.value.tax==="" ||

    newEmployee.value.netPay===""

  ){

    alert("Please fill all fields.");

    return;

  }

  employeeData.value.push({

    id:Date.now(),

    name:newEmployee.value.name,

    department:newEmployee.value.department,

    salary:Number(newEmployee.value.salary),

    tax:Number(newEmployee.value.tax),

    netPay:Number(newEmployee.value.netPay)

  });

  newEmployee.value={

    id:"",

    name:"",

    department:"",

    salary:"",

    tax:"",

    netPay:""

  };

  alert("Employee Added Successfully!");

}
// ===============================
// Edit Employee
// ===============================

const showEdit = ref(false);

const selectedEmployee = ref({});

function openEdit(row){

  selectedEmployee.value = {

    ...row

  };

  showEdit.value = true;

}

function saveEmployee(updatedEmployee){

  const index = employeeData.value.findIndex(

    emp => emp.id === updatedEmployee.id

  );

  if(index !== -1){

    employeeData.value[index] = {

      ...updatedEmployee

    };

    alert("Employee updated successfully!");

  }

  showEdit.value = false;

}

// ===============================
// Delete Employee
// ===============================

const showDelete = ref(false);

const employeeToDelete = ref(null);

function openDelete(row){

  employeeToDelete.value = row;

  showDelete.value = true;

}

function deleteEmployee(){

  const index = employeeData.value.findIndex(

    emp => emp.id === employeeToDelete.value.id

  );

  if(index !== -1){

    employeeData.value.splice(index,1);

    alert("Employee deleted successfully!");

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