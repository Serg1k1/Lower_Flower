import { useState } from 'react';

import '../header.scss';

const Accordion = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title menu__link" onClick={() => setIsActive(!isActive)}>
                <div>Каталог</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive &&
                <div className="accordion-content">
                    <a href="#">Menu 1</a>
                    <a href="#">Menu 2</a>
                    <a href="#">Menu 3</a>
                </div>}
        </div>
    )
}

export default Accordion; 