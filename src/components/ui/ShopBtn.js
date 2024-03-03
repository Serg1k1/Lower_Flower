import { useContext, useEffect, useRef } from 'react';

import shopContext from '../header/context';

import shopingCart from '../../assets/icons/shoping-cart.svg';

import './shopBtn.scss';

const ShopBtn = ({ type }) => {
    const context = useContext(shopContext);
    const shopPosition = useRef();

    let clazz = 'shop__btn';
    if (type === 'header') {
        clazz += ' shop__btn--header'
    }
    useEffect(() => {
        const shopPos = shopPosition.current.getBoundingClientRect().top + window.scrollY;

        context.setCoordinates(shopPos);
    }, [])

    return (
        <button ref={shopPosition} className={clazz}>
            <img src={shopingCart} className="shop__btn-icon" alt='shopinng-cart logo' />
            <span className="shop__btn-details">5</span>
        </button>
    )
}

export default ShopBtn;