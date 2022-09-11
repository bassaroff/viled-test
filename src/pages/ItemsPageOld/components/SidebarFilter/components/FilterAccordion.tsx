import {useState} from "react";
import { v4 as uuid } from 'uuid';
import ArrowDown from "../../../../../assets/images/arrow-down-icon.svg";
import {GroupDto} from "../../../models/FilterItems";
import {groups} from "../../../../../mock/data";

const Filter = (props) => {
    return (
        <div className='filter__wrapper'>
            <input type='text' placeholder='Поиск бренда'/>
        </div>
    )
}

export const FilterAccordion = (props: {
    group: GroupDto,
    toggleItem: (groupId: number, itemId: number) => void,
    itemIsChecked: (itemId: number, groupId: number) => boolean
}) => {
    const [isOpen, toggleIsOpen] = useState(false);
    const {group, toggleItem, itemIsChecked} = props;
    return (
        <div className='accordion'>
            <div className='accordion-header' onClick={() => {
                toggleIsOpen(!isOpen);
            }}>
                <p className='accordion-header__title'>
                    {group.name}
                </p>
                <img className={`${isOpen && 'transformed'}`} src={ArrowDown} alt={'arrow-down'}/>
            </div>
            <div className={`accordion-body ${isOpen && 'is-open'}`}>
                <Filter/>
                {group.items.map((item) => {
                    return (
                        <div key={uuid()}>
                            <input type="checkbox" checked={itemIsChecked(item.id, group.id)} onChange={() => toggleItem(group.id, item.id)}/>
                            <label >{item.name}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
