import React from 'react';

import { MainLayout } from '../layouts/mainLayout';
import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../modules/error/infrastructure';
import Product from '../modules/product/infrastructure';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <MainLayout><ErrorPage/></MainLayout>,
    children: [
      {
        path: '/',
        element: <ErrorPage/>,
      },
      {
        path: '/product/demo',
        element: <Product/>,
      },
    ],
  },
]);
