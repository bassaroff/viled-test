import {typeCategory} from "../pages/ItemsPage/models/typeCategory";
import {Brands, Colors, Types} from "../mock/data";

const merge = (obj1: any, obj2: any) => ({...obj1, ...obj2})

export const getSelectedFilterItemWithToggleAction = (id: number, type: typeCategory, action: (id: number) => void) => {
    switch (type) {
        case 'brand':
            const item = merge(getBrand(id), {
                toggleItem: action(id)
            });
            console.log(item)
            return merge(getBrand(id), {
                toggleItem: action(id)
            });
        case 'type':
            return merge(getType(id), {
                toggleItem: action(id)
            });
        case 'color':
            return merge(getColor(id), {
                toggleItem: action(id)
            });
        default:
            return null;
    }
}

export const getBrand = (id: number) => {
    let brand = {};
    Brands.map((item) => {
        if(item.id === id) {
            brand = item
        }
    });
    return brand;
}

export const getType = (id: number) => {
    let type = {};
    Types.map((item) => {
        if(item.id === id) {
            type = item
        }
    });
    return type;
}

export const getColor = (id: number) => {
    let color = {};
    Colors.map((item) => {
        if(item.id === id) {
            color = item
        }
    });
    return color;
}
