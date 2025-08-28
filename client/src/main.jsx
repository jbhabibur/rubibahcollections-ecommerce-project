import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from "react-router-dom";

import './index.css';
import "./scripts/changeTitle.js";

import router from "./routes/AppRoutes.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);