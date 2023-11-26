import React from 'react';

import { Icon } from '../../../layouts/components/icon';

import styles from './index.module.scss';

export default function Product() {
  return <div className={styles.productPage}>
    <h1 className={styles.title}>Wait ! your order in progress.</h1>
    <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur</p>

    <div className={styles.steps}>
      <div><div className={cx(styles.circle, styles.completed)}><Icon name="check" /></div><span>Cart Review</span></div>
      <div><div className={cx(styles.circle, styles.completed)}><Icon name="check" /></div><span>Checkout</span></div>
      <div><div className={cx(styles.circle, styles.current)}>3</div><span>Special Offer</span></div>
      <div><div className={styles.circle}>4</div><span>Confirmation</span></div>
    </div>

    <div className={styles.specialPrice}><i>ONE TIME ONLY</i> special price for 6 extra Clarifion for only <i>$14 each</i> ($84.00 total!)</div>

    <img src="/assets/images/clarifon.png" />

    <div className={styles.product}>
      <div className={styles.image}>
        <img src="/assets/images/clarifon_icon.svg"/>
      </div>
      <div className={styles.details}>
        <div>
          <div className={styles.name}>Clarifion Air Ionizer</div>
          <div className={styles.prices}>
            <span className={styles.oldPrice}>$180</span>
            <span className={styles.price}>$84</span>
          </div>
        </div>
        <div>
          ⭐⭐⭐⭐⭐
        </div>
        <div className={styles.stock}>
          <div className={styles.checkbox}><div/></div> 12 left in stock
        </div>
        <div className={styles.shortDescription}>
          Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
        </div>
      </div>
    </div>

    <div className={styles.description}>
      <div><Icon name="check_blue"/><span>Negative Ion Technology may <b>help with allergens</b></span></div>
      <div><Icon name="check_blue"/><span>Designed for <b>air rejuvenation</b></span></div>
      <div><Icon name="check_blue"/><span><b>Perfect for every room</b> in all types of places.</span></div>
    </div>

    <div className={styles.discount}>
      <div className={styles.circle}>%</div>
      <span>Save <i>53%</i> and get <i>6 extra Clarifision</i> for only <i>$14 Each</i>.</span>
    </div>

    <button className={styles.claimDiscount}>YES - CLAIM MY DISCOUNT <Icon name="arrow"/></button>

    <div className={styles.payments}>
      <div className={styles.desc}>
        <span>Free shipping</span>
        <span>|</span>
        <span className={styles.secure}><Icon name="lock_grey"/> Secure 256-bit SSL encryption</span>
      </div>
      <hr/>
      <div className={styles.payOptions}>
        <Icon name="visa" size={24}/>
        <Icon name="shop_pay" size={24}/>
        <Icon name="paypal" size={24}/>
        <Icon name="mastercard" size={24}/>
        <Icon name="gpay" size={24}/>
        <Icon name="apple_pay" size={24}/>
        <Icon name="amex" size={24}/>
      </div>
    </div>

    <a className={styles.cancel}>No thanks, I don't want this.</a>

    <div className={styles.guarantee}>
      <img src="/assets/logos/guarantee.svg" />
      <p>
        If you are not completely thrilled with your Clarifion - We have a <b>30 day satisfaction guarantee</b>.
        Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
      </p>
    </div>
  </div>;
}