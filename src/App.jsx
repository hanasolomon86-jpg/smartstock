import { useState, useEffect } from "react";
import inventoryData from "./data/inventory.json";
import InventoryTable from "./components/InventoryTable.jsx";
import AddProductForm from "./components/AddProductForm.jsx";

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("smartstock_products");
    return savedProducts ? JSON.parse(savedProducts) : inventoryData;
  });

  useEffect(() => {
    localStorage.setItem("smartstock_products", JSON.stringify(products));
  }, [products]);

  // פונקציה שמייצרת ID סדרתי למוצר החדש
  const handleAddProduct = (productData) => {
    const nextIdNum = products.length + 1;
    // יוצר פורמט כמו prod-005, prod-006 וכו'
    const formattedId = `prod-${String(nextIdNum).padStart(3, "0")}`;

    const newProduct = {
      id: formattedId,
      ...productData,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div
      style={{
        padding: "20px",
        direction: "rtl",
        textAlign: "right",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>ניהול מלאי - SmartStock</h1>
      <AddProductForm onAddProduct={handleAddProduct} />
      <InventoryTable products={products} />
    </div>
  );
}

export default App;
