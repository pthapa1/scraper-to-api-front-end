import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // Or you can do it this way.
//function Greeting() {
//   return <h4> Hello There! Revisiting React Again.</h4>;
// }
// root.render(<Greeting/>)
