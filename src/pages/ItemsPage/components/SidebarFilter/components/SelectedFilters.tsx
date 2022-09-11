import {v4 as uuid} from 'uuid';
import {FilterItem, FilterItems} from "../../../models/FilterItems";

export const SelectedFilters = (props: {
    selectedItems: [],
    filter: FilterItems,
    clearFilter: () => void,
}) => {
    const { clearFilter, selectedItems } = props;
    const toggleItem = (item: FilterItem) => {
        const newItems = selectedItems.filter(filteredItem => filteredItem !== item);
    }

    return (
        <div className='selected-filter__wrapper'>
            <div className='d-flex justify-space-between align-items-center'>
                <p className='selected-filter__header-title'>Выбранные фильтра</p>
                <button type='button' className='selected-filter__header-btn' onClick={clearFilter}>Сбросить
                </button>
            </div>
            <div className='selected-filter__items'>
                {!selectedItems?.length && (
                    <p>No filter</p>
                )}

                {
                    selectedItems?.map((item) => {
                        return (
                            <div className='selected-filter__item' key={uuid()}>
                                <p>{item.name}</p>
                                <button type='button' onClick={() => item.toggleItem(item)}>
                                    x
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
