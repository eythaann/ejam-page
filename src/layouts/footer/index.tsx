import React from 'react';

import { Link, Outlet } from 'react-router-dom';

import style from './index.module.css';

export const Header = () => {
  return <>
    <div className={style.header}>
      test
    </div>
    <Outlet/>
  </>;
};