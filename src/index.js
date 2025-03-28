import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './conText/store'; // تأكد من أن CartProvider هو الاستيراد الصحيح

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider> {/* استخدام CartProvider بدلاً من store */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartProvider>
);
