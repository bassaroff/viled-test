import {v4 as uuid} from 'uuid';
import {FilterAccordion} from "./components/FilterAccordion";
import {FilterItem, FilterItems} from "../../models/FilterItems";
import {SelectedFilters} from "./components/SelectedFilters";
import './sidebar.scss'
import {Brands, Colors, Types} from "../../../../mock/data";
import {useEffect, useState} from "react";
import {getSelectedFilterItemWithToggleAction} from "../../../../services/getSelectedFilterItemWithToggleAction";

export const SideBarFilter = (props: {
    mobIsOpen: boolean,
    filter: FilterItems,
    setFilter: (data: FilterItems) => void,
    clearFilter: () => void,
}) => {

    const {mobIsOpen, clearFilter, filter, setFilter} = props;
    const [activeAccordion, setActiveAccordion] = useState(-1);
    const [selectedCategories, setSelectedCategories] = useState([])

    const AccordionsWrapper = (props) => {
        return (
            <div className='accordions__wrapper'>
                {props.children}
            </div>
        )
    }

    const toggleAccordion = (index: number): void => {
        if(index === activeAccordion) {
            setActiveAccordion(-1);
        } else {
            setActiveAccordion(index);
        }
    }
    
    const toggleBrand = (brand: FilterItem) => {
        if(!filter.brands.includes(brand)) {
            filter.brands.push(brand);
        } else {
            filter.brands = filter.brands.filter((item) => item.id !== brand.id);
        }
        setFilter({...filter})
    }

    const toggleType = (type: FilterItem) => {
        if(!filter.types.includes(type)) {
            filter.types.push(type);
        } else {
            filter.types = filter.types.filter((item) => item.id !== type.id);
        }
        setFilter({...filter})
    }

    const toggleColor = (color: FilterItem) => {
        if(!filter.colors.includes(color)) {
            filter.colors.push(color);
        } else {
            filter.colors = filter.colors.filter((item) => item.id !== color.id);
        }
        setFilter({...filter})
    }

    useEffect(()=> {
        const categories = [];
        filter.brands.map((item) => {
            item.toggleItem = () =>  toggleBrand(item);
            categories.push(item);
        });
        filter.types.map((item) => {
            item.toggleItem = () => toggleType(item);
            categories.push(item);
        });
        filter.colors.map((item) => {
            item.toggleItem = () => toggleColor(item);
            categories.push(item);
        });

        setSelectedCategories([...categories]);
    },[filter])

    return (
        <div className={`col-3 sidebar__wrapper ${mobIsOpen && 'mobile-open'}`} style={{
            padding: '0 0',
        }}>
            <div>
                <SelectedFilters
                    selectedItems={selectedCategories}
                    clearFilter={clearFilter}
                    filter={filter}
                />
                <AccordionsWrapper>
                    <FilterAccordion
                        toggleAccordion={() => toggleAccordion(1)}
                        index={1}
                        activeAccordion={activeAccordion}
                        headerTitle={'Бренды'}
                        items={Brands}
                        selectedItems={filter.brands}
                        toggleItem={(brand) => toggleBrand(brand)}
                    />
                    <FilterAccordion
                        toggleAccordion={() => toggleAccordion(2)}
                        index={2}
                        activeAccordion={activeAccordion}
                        headerTitle={'Обувь'}
                        items={Types}
                        selectedItems={filter.types}
                        toggleItem={(type) => toggleType(type)}
                    />
                    <FilterAccordion
                        toggleAccordion={() => toggleAccordion(3)}
                        index={3}
                        activeAccordion={activeAccordion}
                        headerTitle={'Цвета'}
                        items={Colors}
                        selectedItems={filter.colors}
                        toggleItem={(color) => toggleColor(color)}
                    />
                </AccordionsWrapper>
            </div>
        </div>
    );
}
