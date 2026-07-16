<template>
  <div class="container">

    <h1 class="page-title">👨‍💼 Employee Payroll</h1>

    <!-- Dashboard Cards -->
    <div class="cards">

      <DashboardCard
        title="Total Employees"
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

    </div>

    <!-- Add Employee Form -->

    <div class="form-card">

      <h2>Add New Employee</h2>

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
          v-model="newEmployee.salary"
          type="number"
          placeholder="Salary"
        />

        <input
          v-model="newEmployee.tax"
          type="number"
          placeholder="Tax"
        />

        <input
          v-model="newEmployee.netPay"
          type="number"
          placeholder="Net Pay"
        />

      </div>

      <button
        class="btn btn-success"
        @click="addEmployee"
      >
        Add Employee
      </button>

    </div>

    <!-- Data Table -->

    <BaseDataTable
      :columns="employeeColumns"
      :rows="employeeData"
      @edit="editEmployee"
      @delete="deleteEmployee"
    />

  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import BaseDataTable from "../components/BaseDataTable.vue";
import DashboardCard from "../components/DashboardCard.vue";

import {
  employeeColumns,
  employeeData
} from "../data/employee.js";

// =======================
// Dashboard Cards
// =======================

const totalSalary = computed(() => {
  return employeeData.value.reduce(
    (sum, emp) => sum + Number(emp.salary),
    0
  );
});

const departmentCount = computed(() => {
  const departments = new Set(
    employeeData.value.map(emp => emp.department)
  );

  return departments.size;
});

// =======================
// Add Employee
// =======================

const newEmployee = ref({

  name: "",

  department: "",

  salary: "",

  tax: "",

  netPay: ""

});

function addEmployee() {

  if (

    !newEmployee.value.name ||

    !newEmployee.value.department ||

    !newEmployee.value.salary ||

    !newEmployee.value.tax ||

    !newEmployee.value.netPay

  ) {

    alert("Please fill all fields.");

    return;

  }

  employeeData.value.push({

    name: newEmployee.value.name,

    department: newEmployee.value.department,

    salary: Number(newEmployee.value.salary),

    tax: Number(newEmployee.value.tax),

    netPay: Number(newEmployee.value.netPay)

  });

  newEmployee.value = {

    name: "",

    department: "",

    salary: "",

    tax: "",

    netPay: ""

  };

  alert("Employee Added Successfully!");

}

// =======================
// Edit Employee
// =======================

function editEmployee(row) {

  const name = prompt("Employee Name", row.name);
  if (name === null) return;

  const department = prompt("Department", row.department);
  if (department === null) return;

  const salary = prompt("Salary", row.salary);
  if (salary === null) return;

  const tax = prompt("Tax", row.tax);
  if (tax === null) return;

  const netPay = prompt("Net Pay", row.netPay);
  if (netPay === null) return;

  row.name = name;
  row.department = department;
  row.salary = Number(salary);
  row.tax = Number(tax);
  row.netPay = Number(netPay);

  alert("Employee Updated Successfully!");

}

// =======================
// Delete Employee
// =======================

function deleteEmployee(row) {

  const confirmDelete = confirm(
    `Delete "${row.name}"?`
  );

  if (!confirmDelete) return;

  const index = employeeData.value.findIndex(
    emp => emp.name === row.name
  );

  if (index !== -1) {

    employeeData.value.splice(index, 1);

    alert("Employee Deleted Successfully!");

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