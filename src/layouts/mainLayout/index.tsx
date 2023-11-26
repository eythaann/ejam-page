import React, { PropsWithChildren } from 'react';

import { Footer } from '../footer';
import { Header } from '../header';
import { Outlet } from 'react-router-dom';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return <>
    <Header/>
    <Outlet/>
    {children}
    <Footer/>
  </>;
};