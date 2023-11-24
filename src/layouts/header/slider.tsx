import React, { useEffect, useRef } from 'react';

import styles from './slider.module.scss';

export const HeaderSlider = () => {
  const slidesRef = useRef<HTMLDivElement>(null);

  const onClickLeft = () => {
    const slides = slidesRef.current;
    slides?.scrollTo({
      behavior: 'smooth',
      left: slides.scrollLeft - slides.clientWidth,
    });
  }

  const onClickRight = () => {
    const slides = slidesRef.current;
    console.log(slides)
    slides?.scrollTo({
      behavior: 'smooth',
      left: slides.scrollLeft + slides.clientWidth,
    });
  }

  return <div className={styles.slider}>
    <div className={styles.button} onClick={onClickLeft}>{'<'}</div>
    <div className={styles.slides} ref={slidesRef}>
      <div>30-DAY SATISFACTION GUARANTEE</div>
      <div>Free delivery on orders over $40.00</div>
      <div>50.000+ HAPPY CUSTOMERS</div>
      <div>100% Money Back Guarantee</div>
    </div>
    <div className={styles.button} onClick={onClickRight}>{'>'}</div>
  </div>
}