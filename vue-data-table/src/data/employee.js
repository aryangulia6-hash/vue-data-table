import { ref } from "vue";
import BaseDataTable from "../components/BaseDataTable.vue";
import DashboardCard from "../components/DashboardCard.vue";
import EditModal from "../components/EditModal.vue";
import DeleteModal from "../components/DeleteModal.vue";
export const employeeColumns = [
  { label: "Name", key: "name" },
  { label: "Department", key: "department" },
  { label: "Salary", key: "salary" },
  { label: "Tax", key: "tax" },
  { label: "Net Pay", key: "netPay" }
];

export const employeeData = ref([
  {
    id: 1,
    name: "Rahul Sharma",
    department: "HR",
    salary: 50000,
    tax: 5000,
    netPay: 45000
  },
  {
    id: 2,
    name: "Priya Singh",
    department: "IT",
    salary: 65000,
    tax: 6500,
    netPay: 58500
  },
  {
    id: 3,
    name: "Amit Verma",
    department: "Finance",
    salary: 70000,
    tax: 7000,
    netPay: 63000
  },
  {
    id: 4,
    name: "Neha Gupta",
    department: "Sales",
    salary: 55000,
    tax: 5500,
    netPay: 49500
  },
  {
    id: 5,
    name: "Arjun Mehta",
    department: "IT",
    salary: 72000,
    tax: 7200,
    netPay: 64800
  },
  {
    id: 6,
    name: "Sneha Kapoor",
    department: "HR",
    salary: 52000,
    tax: 5200,
    netPay: 46800
  },
  {
    id: 7,
    name: "Karan Malhotra",
    department: "Marketing",
    salary: 60000,
    tax: 6000,
    netPay: 54000
  },
  {
    id: 8,
    name: "Riya Sharma",
    department: "Finance",
    salary: 68000,
    tax: 6800,
    netPay: 61200
  },
  {
    id: 9,
    name: "Ankit Jain",
    department: "IT",
    salary: 75000,
    tax: 7500,
    netPay: 67500
  },
  {
    id: 10,
    name: "Simran Kaur",
    department: "Sales",
    salary: 53000,
    tax: 5300,
    netPay: 47700
  },
  {
    id: 11,
    name: "Rohit Yadav",
    department: "HR",
    salary: 49000,
    tax: 4900,
    netPay: 44100
  },
  {
    id: 12,
    name: "Pooja Arora",
    department: "IT",
    salary: 71000,
    tax: 7100,
    netPay: 63900
  },
  {
    id: 13,
    name: "Vikas Gupta",
    department: "Finance",
    salary: 67000,
    tax: 6700,
    netPay: 60300
  },
  {
    id: 14,
    name: "Nidhi Verma",
    department: "Marketing",
    salary: 56000,
    tax: 5600,
    netPay: 50400
  },
  {
    id: 15,
    name: "Mohit Singh",
    department: "Sales",
    salary: 61000,
    tax: 6100,
    netPay: 54900
  }
]);