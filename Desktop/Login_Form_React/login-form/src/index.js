import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// nó chọn phần tử gốc 
const root = ReactDOM.createRoot(document.getElementById('root'));

// từ phẩn tử gốc render các component con qua hàm render
root.render(
  <React.StrictMode> 
    {/* chỉ cần nhớ là nó render ra App */}
    <App />
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
