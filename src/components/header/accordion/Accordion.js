import { useState } from 'react';

import '../header.scss';
import arrow from '../../../assets/icons/arrow.svg';

const Accordion = () => {
    const [isActive, setIsActive] = useState(false);

    let clazz = 'accordion__content';

    if (isActive) {
        clazz += ' accordion__content-opened'
    }

    return (
        <div className={isActive ? 'accordion__item accordion__item--opened' : 'accordion__item'}>
            <div className="accordion__title menu__link" onClick={() => setIsActive(!isActive)}>
                <h4>Каталог</h4>
                <img className="accordion__icon-header" src={arrow} alt="arrow icon" />
            </div>
            <div className={clazz}>
                <a href="#">Menu 1</a>
                <a href="#">Menu 2</a>
                <a href="#">Menu 3</a>
            </div>
        </div>
    )
}

export default Accordion; 