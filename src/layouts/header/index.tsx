import React from 'react';

import { HeaderSlider } from './slider';

import styles from './index.module.scss';

export const Header = () => {
  return <header className={styles.header}>
    <HeaderSlider />
    <div className={styles.logosBar}>
      <object data="/assets/logos/clarifion.svg" type="image/svg+xml"/>
      <div>
        <object data="/assets/logos/macsafe.svg" type="image/svg+xml"/>
        <object data="/assets/logos/norton.svg" type="image/svg+xml"/>
      </div>
    </div>
  </header>;
};