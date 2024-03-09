import { useState } from "react";
import classNames from 'classnames';

import '../footer.scss'

import arrow from '../../../assets/icons/arrow.svg'

const FooterAccordion = ({ title, elements }) => {
    const [isActive, setIsActive] = useState(false);

    const clazz = classNames({
        'accordion__menu': true,
        'accordion__menu-opened': isActive
    })

    return (
        <div className={isActive ? 'accordion__item accordion__item--opened' : 'accordion__item'}>
            <div className="accordion__title footer__title" onClick={() => setIsActive(!isActive)}>
                <h4>{title}</h4>
                <img className="accordion__icon" src={arrow} alt="arrow" />
            </div>
            <div className={clazz}>
                {elements}
            </div>
        </div>
    )
}

export default FooterAccordion;