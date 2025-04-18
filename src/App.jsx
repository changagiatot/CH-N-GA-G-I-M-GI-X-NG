
import React from 'react';

const products = [
  {
    id: 1,
    name: "Bộ chăn ga cotton lụa cao cấp",
    price: "1.250.000đ",
    image: "https://via.placeholder.com/300x200?text=Chan+Ga+Goi+1",
  },
  {
    id: 2,
    name: "Bộ chăn ga gối họa tiết Bắc Âu",
    price: "985.000đ",
    image: "https://via.placeholder.com/300x200?text=Chan+Ga+Goi+2",
  },
  {
    id: 3,
    name: "Combo chăn hè và gối nằm thoáng khí",
    price: "790.000đ",
    image: "https://via.placeholder.com/300x200?text=Chan+Ga+Goi+3",
  }
];

export default function App() {
  return (
    <div style={{ padding: '1rem', maxWidth: 1200, margin: 'auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>
        Cửa Hàng Chăn Ga Gối Cao Cấp
      </h1>
      <input placeholder="Tìm sản phẩm..." style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }} />
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>{product.name}</h3>
              <p style={{ color: '#0d6efd', fontWeight: 'bold' }}>{product.price}</p>
              <button style={{ width: '100%', padding: '0.5rem', backgroundColor: '#0d6efd', color: '#fff', border: 'none', borderRadius: '4px' }}>
                Thêm vào giỏ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
