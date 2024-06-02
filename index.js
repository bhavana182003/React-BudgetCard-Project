
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BudgetProvider } from './Contexts/BudgetsContext';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BudgetProvider>
      <App />
    </BudgetProvider>
  </React.StrictMode>
);
