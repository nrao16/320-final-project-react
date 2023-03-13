import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import BooksPage from './pages/BooksPage';
import AppHeader from './components/AppHeader';
import { loader as booksLoader } from './pages/BooksPage'

import App from './App'
// import { loader as charactersLoader } from './pages/CharactersPage'
// import CharacterDetailsPage, { loader as characterDetailsLoader } from './pages/CharacterDetailsPage';
import ErrorPage from './pages/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
    errorElement: <ErrorPage />
  },
]);
root.render(
  <React.StrictMode>
     <AppHeader title="My Favorite Books and Movies" />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
