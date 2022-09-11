import {useState} from "react";
import {v4 as uuid} from 'uuid';
import ArrowDown from "../../../../../assets/images/arrow-down-icon.svg";
import {FilterItem} from "../../../models/FilterItems";
import {Checkbox} from "antd";

const SearchInput = (props: {
    setSearch: (value: string) => void
}) => {
    const {setSearch} = props;

    return (
        <div className='filter__wrapper'>
            <input type='text' placeholder='Поиск' onChange={(event => {
                setSearch(event.target.value);
            })}/>
        </div>
    )
}

export const FilterAccordion = (props: {
    toggleAccordion: () => void
    index: number,
    activeAccordion: number,
    headerTitle: string,
    items: FilterItem[],
    selectedItems: FilterItem[],
    toggleItem: (item: FilterItem) => void
}) => {
    const {
        items,
        toggleItem,
        headerTitle,
        selectedItems,
        toggleAccordion,
        activeAccordion,
        index
    } = props;
    const [search, setSearch] = useState('');

    const isItemChecked = (item: FilterItem): boolean => {
        return selectedItems.includes(item);
    }

    return (
        <div className='accordion'>
            <div className='accordion-header' onClick={toggleAccordion}>
                <p className='accordion-header__title'>
                    {headerTitle}
                </p>
                <img className={`${activeAccordion === index && 'transformed'}`} src={ArrowDown} alt={'arrow-down'}/>
            </div>
            <div className={`accordion-body ${activeAccordion === index && 'is-open'}`}>
                <SearchInput setSearch={(value) => setSearch(value)}/>
                {
                    items.map((item) => {
                        if (item.name.toLowerCase().includes(search.toLowerCase())) {
                            const id = uuid();
                            return (
                                <div className='checkbox__wrapper' key={id}>
                                    <input
                                        className='checkbox'
                                        type="checkbox"
                                        checked={isItemChecked(item)}
                                        onChange={() => {
                                            console.log('he')
                                            toggleItem(item)
                                        }}
                                        id={id}
                                    />
                                    <span className='checkbox__before'></span>
                                    <label className='checkbox__text' htmlFor={id}>{item.name}</label>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
}
