import React from 'react';

import { router } from './router';
import classNames from 'classnames';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { setReloadOnChanges } from './reload';

import './styles/variables.css';
import './styles/reset.css';
import './styles/global.css';

setReloadOnChanges();
window.cx = classNames;

const domNode = document.getElementById('root');
if (domNode) {
  const root = createRoot(domNode);
  root.render(<RouterProvider router={router} />);
}
