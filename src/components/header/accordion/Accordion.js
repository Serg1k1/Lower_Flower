import { useGetAllCatalogQuery } from '../../api/filtersApiSlice';
import { useState } from 'react';
import classNames from 'classnames';

import '../header.scss';
import arrow from '../../../assets/icons/arrow.svg';

const Accordion = () => {
    const [isActive, setIsActive] = useState(false);

    const {
        data: catalog = []
    } = useGetAllCatalogQuery();

    const clazz = classNames({
        'accordion__content': true,
        'accordion__content-opened': isActive
    })

    const renderMenu = (arr) => {
        return arr.map((item) => {
            return (
                <a key={item.id} href="#">{item.name}</a>
            )
        })
    }

    const elements = renderMenu(catalog);

    return (
        <div className={isActive ? 'accordion__item accordion__item--opened' : 'accordion__item'}>
            <div className="accordion__title menu__link" onClick={() => setIsActive(!isActive)}>
                <h4>Каталог</h4>
                <img className="accordion__icon-header" src={arrow} alt="arrow icon" />
            </div>
            <div className={clazz}>
                {elements}
            </div>
        </div>
    )
}

export default Accordion; 