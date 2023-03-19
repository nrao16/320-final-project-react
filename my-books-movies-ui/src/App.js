import React from "react";
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import BooksPage from './pages/BooksPage';
import AppHeader from './components/AppHeader';
import { loader as booksLoader } from './pages/BooksPage'
import { loader as moviesLoader } from './pages/MoviesPage'

function App() {
  const Layout = () => (
    <>
      <AppHeader
        title="Books and Movies"
      />
      <Outlet />
    </>
  );

  const routers = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
          errorElement: <ErrorPage />
        },
        {
          path: 'books',
          element: <BooksPage />,
          loader: booksLoader,
          errorElement: <ErrorPage />
        },
        {
          path: 'movies',
          element: <MoviesPage />,
          loader: moviesLoader,
          errorElement: <ErrorPage />
        }
      ]
    }
  ]);


  return (
    <RouterProvider router={routers} />
  );
}

export default App;
