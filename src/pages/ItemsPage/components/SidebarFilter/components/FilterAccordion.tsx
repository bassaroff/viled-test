import {useState} from "react";
import ArrowDown from "../../../../../assets/images/arrow-down-icon.svg";
import {filter as SidebarFilterData} from "../../../../../mock/data";

const Filter = (props) => {
    return (
        <div className='filter__wrapper'>
            <input type='text' placeholder='Поиск бренда'/>
        </div>
    )
}

export const FilterAccordion = (props: {
    items: {}[],
    changeFilter: (id: number) => void
}) => {
    const [isOpen, toggleIsOpen] = useState(false);
    const {items, changeFilter} = props;
    return (
        <div className='accordion'>
            <div className='accordion-header' onClick={() => {
                toggleIsOpen(!isOpen);
            }}>
                <p className='accordion-header__title'>
                    Группа
                </p>
                <img className={`${isOpen && 'transformed'}`} src={ArrowDown} alt={'arrow-down'}/>
            </div>
            <div className={`accordion-body ${isOpen && 'is-open'}`}>
                <Filter/>
                {SidebarFilterData.brands.map((item) => {
                    return (
                        <div>
                            <input type="checkbox" checked={true} />
                            <label >Subscribe to newsletter?</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
