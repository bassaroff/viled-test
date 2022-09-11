import './sidebar.scss'
import {useEffect, useState} from "react";
import {v4 as uuid} from 'uuid';
import {FilterAccordion} from "./components/FilterAccordion";
import {FilterItem, FilterItems} from "../../models/FilterItems";
import {Checkbox, FormControlLabel} from "@mui/material";
import ArrowDown from '../../../../assets/images/arrow-down-icon.svg';
import {groups} from "../../../../mock/data";
import {SelectedFilters} from "./components/SelectedFilters";

export const SideBarFilter = (props: {
    mobIsOpen: boolean,
    filter: FilterItems,
    setFilter: (data: FilterItems) => void,
    clearFilter: () => void
}) => {

    const {mobIsOpen, clearFilter, filter, setFilter} = props;

    const itemIsChecked = (itemId: number, groupId: number) => {
        let isChecked = false;
        filter.items.map(group => {
            if (group.id === groupId) {
                group.items.map(item => {
                    if (item.id === itemId) {
                        isChecked = true;
                    }
                });
            }
        });
        return isChecked;
    }

    const toggleItem = (groupId: number, itemId: number) => {
        let isGroupExist = false;
        filter.items.map((group) => {
            if (group.id === groupId) {
                isGroupExist = true;
            }
        });

        if (!isGroupExist) {
            const copyGroups = JSON.parse(JSON.stringify(groups));
            let group = copyGroups.filter((group) => group.id === groupId)[0];
            group.items = group.items.filter(item => item.id === itemId);
            filter.items.push(group);
            setFilter({...filter})
        } else {
            let isItemExist = false
            filter.items.map((group) => {
                if (group.id === groupId) {
                    group.items.map((item) => {
                        if (item.id === itemId) {
                            isItemExist = true;
                        }
                    });
                }
            });

            if (!isItemExist) {
                const item = getItemFromGroup(groupId, itemId);
                filter.items = filter.items.map((group) => {
                    if (group.id === groupId) {
                        group.items.push(item);
                    }
                    return group;
                });

                setFilter({...filter});
            } else {
                let newItems = [];

                for (let i = 0; i < filter.items.length; i++) {
                    if (filter.items[i].id === groupId) {
                        for (let j = 0; j < filter.items[i].items.length; j++) {
                            if (itemId !== filter.items[i].items[j].id) {
                                newItems.push(filter.items[i].items[j]);
                            }
                        }
                        filter.items[i].items = newItems;
                    }
                }

                setFilter({...filter});
            }
        }
    }

    const getItemFromGroup = (groupId: number, itemId: number): FilterItem => {
        let getItem = {};
        for (let i = 0; i < groups.length; i++) {
            if (groups[i].id === groupId) {
                for (let j = 0; j < groups[i].items.length; j++) {
                    if (groups[i].items[j].id === itemId) {
                        getItem = groups[i].items[j];
                    }
                }
            }
        }

        return getItem as FilterItem;
    }

    const AccordionsWrapper = (props) => {
        return (
            <div className='accordions__wrapper'>
                {props.children}
            </div>
        )
    }
    return (
        <div className={`col-3 sidebar__wrapper ${mobIsOpen && 'mobile-open'}`} style={{
            borderRight: '1px solid rgba(0, 0, 0, 0.05)',
            padding: '0.75rem 0'
        }}>
            <div>
                <SelectedFilters
                    clearFilter={clearFilter}
                    filter={filter}
                    toggleItem={toggleItem}
                />
                <AccordionsWrapper>
                    {
                        groups.map((group) => {
                            return (
                                <FilterAccordion
                                    key={uuid()}
                                    group={group}
                                    toggleItem={(groupId: number, itemId: number) => toggleItem(group.id, itemId)}
                                    itemIsChecked={itemIsChecked}
                                />
                            )
                        })
                    }

                    {/*<FilterAccordion items={SidebarFilterData.brands} changeFilter={(id) => handleChangeBrand(id)}/>*/}
                    {/*<FilterAccordion items={SidebarFilterData.colors} changeFilter={(id) => handleChangeColor(id)}/>*/}
                </AccordionsWrapper>
            </div>
        </div>
    );
}
