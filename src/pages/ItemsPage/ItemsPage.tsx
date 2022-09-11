import {useEffect, useState} from "react";
import {ContentHeader} from "./components/ContentHeader/ContentHeader";
import {SideBarFilter} from "./components/SidebarFilter/SideBarFilter";
import {ItemsListed} from "./components/ItemsListed";
import SortIcon from '../../assets/images/sort-icon.svg';
import FilterIcon from '../../assets/images/filter-icon.svg';
import {FilterItem, FilterItems, GroupDto} from "./models/FilterItems";
import {Items} from "../../mock/data";

export const ItemsPage = () => {
    const ItemsContent = () => {
        const [sideMobIsOpen, toggleSideMobIsOpen] = useState(false);
        const [filter, setFilter] = useState<FilterItems>({
            page: 0,
            brands: [],
            colors: [],
            types: [],
            price: {
                from: 0,
                to: 0
            }
        });
        const [items, setItems] = useState([]);
        const [sort, setSort] = useState(false);

        const clearFilter = () => {
            setFilter({
                page: 0,
                brands: [],
                colors: [],
                types: [],
                price: {
                    from: 0,
                    to: 0
                }
            });
        }

        const ItemsSort = () => {
            return (
                <div style={{
                    borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                    padding: '8px 0'
                }}>
                    <div className='container'>
                        <div className='items-sort__wrapper'>
                            <img src={SortIcon} alt='sort-icon'/>
                            <button type='button' onClick={() => {
                                setSort(!sort);
                            }}>Сортировать
                            </button>
                        </div>
                    </div>
                </div>
            )
        }

        const handleFilterChange = (data: any) => {
            setFilter({...filter});
        }

        const getSortedItems = (items: []) => {
           if(sort) {
               items.sort((a, b) => {
                   if(a.price > b.price) return 1;
                   if(a.price < b.price) return -1;
                   return 0;
               });
           } else {
               items.sort((a, b) => {
                   if(a.price < b.price) return 1;
                   if(a.price > b.price) return -1;
                   return 0;
               });
           }

            return items;
        }

        const getItems = () => {
            let getItems = [];


            if (!filter.colors.length &&
                !filter.types.length &&
                !filter.brands.length) {
                getItems = Items;
            } else {
                Items.map((item) => {
                    filter.brands.map(brand => {
                        if (brand.id === item.brandId) {
                            if (!getItems.includes(item)) {
                                getItems.push(item);
                            }
                        }
                    });
                    filter.types.map(type => {
                        if (type.id === item.typeId) {
                            if (!getItems.includes(item)) {
                                getItems.push(item);
                            }
                        }
                    });
                    filter.colors.map(color => {
                        if (color.id === item.colorId) {
                            if (!getItems.includes(item)) {
                                getItems.push(item);
                            }
                        }
                    });
                });
            }

            getItems = getSortedItems(getItems);

            setItems([...getItems]);
        }

        useEffect(() => {
            getItems();
        }, [filter, sort])

        return (
            <div>
                <ItemsSort/>
                <div className='row' style={{
                    padding: 0,
                    position: 'relative'
                }}>
                    <SideBarFilter
                        mobIsOpen={sideMobIsOpen}
                        filter={filter}
                        setFilter={(data) => handleFilterChange(data)}
                        clearFilter={clearFilter}
                    />
                    <ItemsListed items={items}/>
                    <div className='filter-toggle__btn' onClick={() => {
                        toggleSideMobIsOpen(!sideMobIsOpen)
                    }}>
                        <img src={FilterIcon} alt={'filter-icon'}/>
                    </div>
                </div>
            </div>
        )
    }

    const Pagination = () => {
        return (
            <div style={{
                borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                padding: '8px 0'
            }}>
                <div className='container'>
                    <div className='items-sort__wrapper'>
                        <div className="pagination-wrapper">
                            <ul>
                                <li>{`<`}</li>
                                <li className={'is-active'}>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>{`>`}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <ContentHeader/>
            <ItemsContent/>
            <Pagination/>
        </div>
    );
}
