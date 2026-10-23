import { useState, useEffect } from "react";
import inventoryData from "./data/inventory.json";
import InventoryTable from "./components/InventoryTable.jsx";
import AddProductForm from "./components/AddProductForm.jsx";

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("smartstock_products");
    return savedProducts ? JSON.parse(savedProducts) : inventoryData;
  });

  // שמירה אוטומטית ב-localStorage
  useEffect(() => {
    localStorage.setItem("smartstock_products", JSON.stringify(products));
  }, [products]);

  // חוק אוטומטי: בדיקת מלאי והדפסת לוג מערכת בעת חוסר מלאי
  useEffect(() => {
    products.forEach((product) => {
      if (product.stock < product.minStockLevel) {
        console.warn(
          `[התרעת מערכת - חוסר מלאי]: המוצר "${product.name}" (מקט: ${product.id}) נמצא מתחת לסף המינימום! כמו נוכחית: ${product.stock}, סף מינימום: ${product.minStockLevel}`,
        );
      }
    });
  }, [products]);

  // פונקציה להוספת מוצר חדש עם ID סדרתי
  const handleAddProduct = (productData) => {
    const nextIdNum = products.length + 1;
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
