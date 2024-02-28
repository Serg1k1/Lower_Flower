import { useState } from "react";

import '../footer.scss'

import arrow from '../../../assets/icons/arrow.svg'

const FooterAccordion = ({ title }) => {
    const [isActive, setIsActive] = useState(false);

    let clazz = 'accordion__menu';

    if (isActive) {
        clazz += ' accordion__menu-opened'
    }

    return (
        <div className={isActive ? 'accordion__item accordion__item--opened' : 'accordion__item'}>
            <div className="accordion__title footer__title" onClick={() => setIsActive(!isActive)}>
                <h4>{title}</h4>
                <img className="accordion__icon" src={arrow} alt="arrow" />
            </div>
            <div className={clazz}>
                <a className="footer__text" href="#">Menu 1</a>
                <a className="footer__text" href="#">Menu 2</a>
                <a className="footer__text" href="#">Menu 3</a>
            </div>
        </div>
    )
}

export default FooterAccordion;