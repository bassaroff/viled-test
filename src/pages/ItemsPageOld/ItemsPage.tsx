import {useEffect, useState} from "react";
import {ContentHeader} from "./components/ContentHeader/ContentHeader";
import {SideBarFilter} from "./components/SidebarFilter/SideBarFilter";
import {ItemsListed} from "./components/ItemsListed";
import SortIcon from '../../assets/images/sort-icon.svg';
import FilterIcon from '../../assets/images/filter-icon.svg';
import {FilterItems, GroupDto} from "./models/FilterItems";
import {Items} from "../../mock/data";

export const ItemsPage = () => {

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
                            console.log('sort changed');
                        }}>Сортировать
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    const ItemsContent = () => {
        const [sideMobIsOpen, toggleSideMobIsOpen] = useState(false);
        const [filter, setFilter] = useState<FilterItems>({
            page: 0,
            items: [],
            price: {
                from: 0,
                to: 0
            }
        });
        const [items, setItems] = useState([]);

        const clearFilter = () => {
            setFilter({
                page: 0,
                items: [],
                price: {
                    from: 0,
                    to: 0
                }
            });
        }

        const handleFilterChange = (data: any) => {
            setFilter(data);
        }

        const getItems = () => {
            // TODO
            const filterGroups = filter.items;
        }

        useEffect(() => {
            getItems();
        }, [filter])

        return (
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
            <ItemsSort/>
            <ItemsContent/>
            <Pagination/>
        </div>
    );
}
