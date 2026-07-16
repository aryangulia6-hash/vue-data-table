import { ref } from "vue";

export const inventoryColumns = [
  { label: "Product", key: "product" },
  { label: "SKU", key: "sku" },
  { label: "Stock", key: "stock" },
  { label: "Location", key: "location" }
];

export const inventoryData = ref([
  { product: "Laptop", sku: "L1001", stock: 15, location: "Warehouse A" },
  { product: "Mouse", sku: "M1002", stock: 60, location: "Warehouse B" },
  { product: "Keyboard", sku: "K1003", stock: 35, location: "Warehouse A" },
  { product: "Monitor", sku: "M1004", stock: 20, location: "Warehouse C" },
  { product: "Printer", sku: "P1005", stock: 10, location: "Warehouse B" },
  { product: "Scanner", sku: "S1006", stock: 18, location: "Warehouse A" },
  { product: "Webcam", sku: "W1007", stock: 40, location: "Warehouse C" },
  { product: "Speaker", sku: "SP1008", stock: 25, location: "Warehouse A" },
  { product: "Hard Disk", sku: "H1009", stock: 50, location: "Warehouse B" },
  { product: "SSD", sku: "SSD1010", stock: 28, location: "Warehouse C" },
  { product: "RAM", sku: "R1011", stock: 70, location: "Warehouse A" },
  { product: "CPU", sku: "C1012", stock: 14, location: "Warehouse B" },
  { product: "GPU", sku: "G1013", stock: 8, location: "Warehouse C" },
  { product: "UPS", sku: "U1014", stock: 22, location: "Warehouse A" },
  { product: "Projector", sku: "PR1015", stock: 6, location: "Warehouse B" }
]);