import {v4 as uuid} from 'uuid';
import {FilterItems} from "../../../models/FilterItems";

export const SelectedFilters = (props: {
    clearFilter: () => void,
    filter: FilterItems,
    toggleItem: (groupId: number, itemId: number) => void
}) => {
    const { clearFilter, filter, toggleItem } = props;
    return (
        <div className='selected-filter__wrapper'>
            <div className='d-flex justify-space-between align-items-center'>
                <p className='selected-filter__header-title'>Выбранные фильтра</p>
                <button type='button' className='selected-filter__header-btn' onClick={clearFilter}>Сбросить
                </button>
            </div>
            <div className='selected-filter__items'>
                {!filter.items.length && (
                    <p>No filter</p>
                )}
                {

                }
                {filter.items.map((group) => {
                    return(
                        <div key={uuid()}>
                            {group.items.map((item) => {
                                return (
                                    <div className='selected-filter__item' key={uuid()}>
                                        <p>{item.name}</p>
                                        <button type='button' onClick={() => toggleItem(group.id, item.id)}>
                                            x
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
