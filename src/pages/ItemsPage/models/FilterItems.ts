export interface FilterItem {
    id: number;
    name: string;
}

export interface FilterItems {
    page: 0;
    brands: FilterItem[];
    colors: FilterItem[];
    types: FilterItem[];
    price: {
        from: number | null,
        to: number | null
    };
}
