import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import Search from "./pages/Search/Search.tsx"
import Book from './pages/Book/Book.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/search/book/:id',
    element: <Book />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
