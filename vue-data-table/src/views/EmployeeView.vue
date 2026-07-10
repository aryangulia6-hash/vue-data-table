<template>
  <div>
    <h1>Employee Payroll</h1>

    <BaseDataTable
      :columns="employeeColumns"
      :rows="employeeData"
      @edit="editEmployee"
      @delete="deleteEmployee"
    />
  </div>
</template>

<script setup>
import BaseDataTable from "../components/BaseDataTable.vue";

import {
  employeeColumns,
  employeeData
} from "../data/employee.js";

function editEmployee(row) {
  alert("Edit " + row.name);
}

function deleteEmployee(row) {
  alert("Delete " + row.name);
}
</script>