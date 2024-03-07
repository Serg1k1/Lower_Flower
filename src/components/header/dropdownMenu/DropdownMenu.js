import { useGetAllCatalogQuery } from '../../api/filtersApiSlice';

import '../header.scss';

const DropdownMenu = () => {
    const {
        data: catalog = []
    } = useGetAllCatalogQuery();

    const renderMenu = (arr) => {
        return arr.map((item) => {
            return (
                <a key={item.id} href="#">{item.name}</a>
            )
        })
    }

    const elements = renderMenu(catalog);

    return (
        <div className="menu__dropdown-content">
            {elements}
        </div>
    )
}

export default DropdownMenu;