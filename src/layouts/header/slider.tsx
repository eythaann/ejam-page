import React, { useRef } from 'react';

import { Icon } from '../components/icon';

import { useInterval } from '../../modules/shared/app/hooks';

import styles from './slider.module.scss';

export const HeaderSlider = () => {
  const slidesRef = useRef<HTMLDivElement>(null);

  const resetInterval = useInterval(() => {
    const slides = slidesRef.current;

    if (!slides) {
      return;
    }

    if (slides.scrollLeft < (slides.clientWidth * 3) - 2) {
      return onClickRight();
    }

    slides?.scrollTo({
      behavior: 'smooth',
      left: 0,
    });
  }, 4000);

  const onClickLeft = () => {
    resetInterval();
    const slides = slidesRef.current;
    slides?.scrollTo({
      behavior: 'smooth',
      left: slides.scrollLeft - slides.clientWidth,
    });
  };

  const onClickRight = () => {
    resetInterval();
    const slides = slidesRef.current;
    slides?.scrollTo({
      behavior: 'smooth',
      left: slides.scrollLeft + slides.clientWidth,
    });
  };

  return <div className={styles.slider}>
    <div className={styles.button} onClick={onClickLeft}>
      <Icon name="chevron"/>
    </div>
    <div className={styles.slides} ref={slidesRef}>
      <div><Icon name="check_reward" size={16} /> 30-DAY SATISFACTION GUARANTEE</div>
      <div><Icon name="car" size={16} /> Free delivery on orders over $40.00</div>
      <div><Icon name="hearth" size={16} /> 50.000+ HAPPY CUSTOMERS</div>
      <div><Icon name="refond" size={16} /> 100% Money Back Guarantee</div>
    </div>
    <div className={cx(styles.button, styles.right)} onClick={onClickRight}>
      <Icon name="chevron"/>
    </div>
  </div>;
};