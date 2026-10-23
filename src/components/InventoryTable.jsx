import React, { useState } from 'react';

export default function InventoryTable() {
  // רשימת מוצרים התחלתית לניהול המלאי
  const [products, setProducts] = useState([
    { id: 1, name: 'חלב תנובה 3%', quantity: 6, price: 7.90 },
    { id: 2, name: 'לחם פרוס אחיד', quantity: 15, price: 6.50 },
    { id: 3, name: 'ביצים לארג׳ (תבנית)', quantity: 4, price: 32.00 },
    { id: 4, name: 'גבינה צהובה עמק', quantity: 12, price: 29.90 },
  ]);

  return (
    <div style={{ padding: '20px', direction: 'rtl', textAlign: 'right', fontFamily: 'Arial, sans-serif' }}>
      <h2>ניהול מלאי - SmartStock</h2>
      <table border="1" cellPadding="12" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th>מק״ט (ID)</th>
            <th>שם המוצר</th>
            <th>כמות במלאי</th>
            <th>מחיר (₪)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              {/* אם הכמות קטנה מ-10, נציג באדום עם התראה */}
              <td style={{ 
                color: product.quantity < 10 ? '#d9534f' : '#333', 
                fontWeight: product.quantity < 10 ? 'bold' : 'normal' 
              }}>
                {product.quantity} {product.quantity < 10 && '⚠️ (חוסר במלאי!)'}
              </td>
              <td>{product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}