export default function InventoryTable({ products }) {
  // משתמשת ישירות ב-products שמגיע מלמעלה מבלי ליצור useState משל עצמך

  return (
    <div
      style={{
        padding: "20px",
        direction: "rtl",
        textAlign: "right",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2> מלאי - SmartStock</h2>
      <table
        border="1"
        cellPadding="12"
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "15px" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th>מק״ט (ID)</th>
            <th>שם המוצר</th>
            <th>כמות במלאי</th>
            <th>מלאי מינימום</th>
            <th>מחיר (₪)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            // בדיקה האם הכמות נמוכה מהרף המינימלי שהוגדר ב-JSON
            const isLowStock = product.stock < product.minStockLevel;

            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td
                  style={{
                    color: isLowStock ? "#d9534f" : "#333",
                    fontWeight: isLowStock ? "bold" : "normal",
                  }}
                >
                  {product.stock} {isLowStock && "⚠️ (חוסר במלאי!)"}
                </td>
                <td>{product.minStockLevel}</td>
                <td>{product.price.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
