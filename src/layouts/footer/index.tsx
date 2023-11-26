import React from 'react';

import { Icon } from '../components/icon';

import style from './index.module.scss';

export const Footer = () => {
  return <footer className={style.footer}>
    <div className={style.copyright}>
      <span>Copyright (c) 2023</span>|<span>Clarifionsupport@clarifion.com</span>
    </div>
    <div className={style.secure}>
      <Icon name="lock"/> Secure 256-bit SSL encryption.
    </div>
  </footer>;
};