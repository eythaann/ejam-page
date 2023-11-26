import React from 'react';

import { Icon } from '../../../layouts/components/icon';

import styles from './FakeComment.module.scss';

export const FakeComment = () => {
  return <div className={styles.comment}>
    <div className={styles.user}>
      <img className={styles.avatar} src="/assets/images/avatar.png" loading="lazy"/>
      <div className={styles.userInfo}>
        <div className={styles.stars}>
          <Icon name="star"/>
          <Icon name="star"/>
          <Icon name="star"/>
          <Icon name="star"/>
          <Icon name="star"/>
        </div>
        <div className={styles.name}>Ken. T <span className={styles.verified}><Icon name="check_green" />Verified Customer</span></div>
      </div>
    </div>
    <p>
      “As soon as the Clarifions arrived I put one in my bedroom.
      This was late in the afternoon. When I went to the bedroom in the evening it smelled clean.
      When I went to bed I felt I could breathe better. Wonderful.”
    </p>
  </div>;
};