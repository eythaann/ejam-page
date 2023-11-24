import React from 'react';

import { Header } from '../layouts/header';
import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../modules/error/infrastructure';
import Product from '../modules/product/infrastructure';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <ErrorPage/>,
      },
      {
        path: '/product',
        element: <Product/>,
      },
    ],
  },
]);
