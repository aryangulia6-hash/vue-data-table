import { ref } from "vue";

export const inventoryColumns = [
  { label: "Product", key: "product" },
  { label: "SKU", key: "sku" },
  { label: "Stock", key: "stock" },
  { label: "Location", key: "location" }
];

export const inventoryData = ref([
  {
    id: 1,
    product: "Laptop",
    sku: "LAP001",
    stock: 25,
    location: "Warehouse A"
  },
  {
    id: 2,
    product: "Mouse",
    sku: "MOU002",
    stock: 120,
    location: "Warehouse A"
  },
  {
    id: 3,
    product: "Keyboard",
    sku: "KEY003",
    stock: 80,
    location: "Warehouse B"
  },
  {
    id: 4,
    product: "Monitor",
    sku: "MON004",
    stock: 35,
    location: "Warehouse B"
  },
  {
    id: 5,
    product: "Printer",
    sku: "PRI005",
    stock: 15,
    location: "Warehouse C"
  },
  {
    id: 6,
    product: "Scanner",
    sku: "SCA006",
    stock: 18,
    location: "Warehouse C"
  },
  {
    id: 7,
    product: "Projector",
    sku: "PRO007",
    stock: 10,
    location: "Warehouse A"
  },
  {
    id: 8,
    product: "Router",
    sku: "ROU008",
    stock: 45,
    location: "Warehouse B"
  },
  {
    id: 9,
    product: "Switch",
    sku: "SWT009",
    stock: 40,
    location: "Warehouse A"
  },
  {
    id: 10,
    product: "Webcam",
    sku: "WEB010",
    stock: 55,
    location: "Warehouse C"
  },
  {
    id: 11,
    product: "Headphones",
    sku: "HEA011",
    stock: 65,
    location: "Warehouse A"
  },
  {
    id: 12,
    product: "External Hard Drive",
    sku: "HDD012",
    stock: 22,
    location: "Warehouse B"
  },
  {
    id: 13,
    product: "USB Drive",
    sku: "USB013",
    stock: 150,
    location: "Warehouse C"
  },
  {
    id: 14,
    product: "Graphics Card",
    sku: "GPU014",
    stock: 12,
    location: "Warehouse A"
  },
  {
    id: 15,
    product: "RAM Module",
    sku: "RAM015",
    stock: 75,
    location: "Warehouse B"
  }
]);