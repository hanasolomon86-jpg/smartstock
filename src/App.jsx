import { useState } from "react";
// ייבוא קובץ ה-JSON ישירות לנתיב המתאים בפרויקט
import inventoryData from "./data/inventory.json";
import InventoryTable from "./components/InventoryTable.jsx";

function App() {
  // אתחול ה-useState כך שהערך ההתחלתי הוא המוצרים שמגיעים מקובץ ה-JSON
  const [products, setProducts] = useState(inventoryData);

  return (
    <div className="app-container">
      <h1>ניהול מלאי - SmartStock</h1>

      {/* מעבירים את רשימת המוצרים כ-props לטבלה */}
      <InventoryTable products={products} />
    </div>
  );
}

export default App;
