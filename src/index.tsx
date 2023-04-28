import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import App from "./App";
import AuthProvider from './provider/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);

