export interface GroupDto {
    id: number;
    name: string,
    items: FilterItem[];
}

export interface FilterItem {
    id: number;
    name: string;
}
export interface FilterItems {
    page: 0;
    items: GroupDto[];
    price: {
        from: number,
        to: number
    }
}
