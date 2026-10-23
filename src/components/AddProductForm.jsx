import { useState } from "react";

export default function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [minStockLevel, setMinStockLevel] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !stock || !minStockLevel || !price) {
      alert("אנא מילאי את כל השדות");
      return;
    }

    // מעבירים את הנתונים בלבד, ללא ID
    onAddProduct({
      name: name,
      stock: Number(stock),
      minStockLevel: Number(minStockLevel),
      price: Number(price),
    });

    // איפוס השדות
    setName("");
    setStock("");
    setMinStockLevel("");
    setPrice("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "20px",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <h3>הוספת מוצר חדש</h3>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div>
          <label>שם המוצר: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="למשל: חלב"
          />
        </div>
        <div>
          <label>כמות התחלתית: </label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="0"
          />
        </div>
        <div>
          <label>מלאי מינימום: </label>
          <input
            type="number"
            value={minStockLevel}
            onChange={(e) => setMinStockLevel(e.target.value)}
            placeholder="0"
          />
        </div>
        <div>
          <label>מחיר (₪): </label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0.00"
          />
        </div>
        <button
          type="submit"
          style={{ padding: "5px 15px", cursor: "pointer" }}
        >
          שמור מוצר
        </button>
      </div>
    </form>
  );
}
