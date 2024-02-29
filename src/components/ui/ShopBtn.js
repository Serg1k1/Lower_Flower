import shopingCart from '../../assets/icons/shoping-cart.svg';

import './shopBtn.scss';

const ShopBtn = ({ type }) => {
    let clazz = 'shop__btn';
    if (type === 'header') {
        clazz += ' shop__btn--header'
    }

    return (
        <button className={clazz}>
            <img src={shopingCart} className="shop__btn-icon" alt='shopinng-cart logo' />
            <span className="shop__btn-details">5</span>
        </button>
    )
}

export default ShopBtn;