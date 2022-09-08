import './sidebar.scss'
import {useEffect, useState} from "react";
import ArrowDown from '../../../../assets/images/arrow-down-icon.svg';
import {Checkbox, FormControlLabel} from "@mui/material";
import {filter as SidebarFilterData} from "../../../../mock/data";
import {FilterAccordion} from "./components/FilterAccordion";

export const SideBarFilter = (props: {
    mobIsOpen: boolean,
    filter: any,
    setFilter: (data: any) => void
}) => {

    const [selectedFilterItems, setSelectedFilterItems] = useState([]);

    const {mobIsOpen} = props;

    const handleFilterChange = () => {

    }

    const AccordionsWrapper = (props) => {
        return (
            <div className='accordions__wrapper'>
                {props.children}
            </div>
        )
    }

    const handleChangeCategory = (id: number) => {

    }
    const handleChangeBrand = (id: number) => {

    }
    const handleChangeColor = (id: number) => {

    }

    return (
        <div className={`col-3 sidebar__wrapper ${mobIsOpen && 'mobile-open'}`} style={{
            borderRight: '1px solid rgba(0, 0, 0, 0.05)',
            padding: '0.75rem 0'
        }}>
            <div>
                <div className='selected-filter__wrapper'>
                    <div className='d-flex justify-space-between align-items-center'>
                        <p className='selected-filter__header-title'>Выбранные фильтра</p>
                        <button type='button' className='selected-filter__header-btn'>Сбросить</button>
                    </div>
                    <div className='selected-filter__items'>
                        {!selectedFilterItems.length && (
                            <p>No filter</p>
                        )}
                        {selectedFilterItems.map((item, index) => {
                            return (
                                <div className='selected-filter__item' key={`filter-item${index}`}>
                                    <p>{item.label}</p>
                                    <button type='button'>
                                        x
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <AccordionsWrapper>
                    <FilterAccordion
                        items={SidebarFilterData.categories}

                        changeFilter={(id) => handleChangeCategory(id)}
                    />
                    {/*<FilterAccordion items={SidebarFilterData.brands} changeFilter={(id) => handleChangeBrand(id)}/>*/}
                    {/*<FilterAccordion items={SidebarFilterData.colors} changeFilter={(id) => handleChangeColor(id)}/>*/}
                </AccordionsWrapper>
            </div>
        </div>
    );
}
