import Image1 from '/src/assets/product-images/image-1.svg';
import Image2 from '/src/assets/product-images/image-2.svg';
import Image3 from '/src/assets/product-images/image-3.svg';
import Image4 from '/src/assets/product-images/image-4.svg';
import Image5 from '/src/assets/product-images/image-5.svg';
import Image6 from '/src/assets/product-images/image-6.jpg';
import Image7 from '/src/assets/product-images/image-7.png';
import Image8 from '/src/assets/product-images/image-8.png';
import Image9 from '/src/assets/product-images/image-9.png';

export const Brands = [
    {
        id: 1,
        name: 'Alexander McQueen'
    },
    {
        id: 2,
        name: 'Brunello Cucinelli'
    },
    {
        id: 3,
        name: 'Christian Louboutin'
    },
    {
        id: 4,
        name: 'Dolce&Gabbana'
    },
    {
        id: 5,
        name: 'Fratelli Rossetti'
    },
];

export const Types = [
    {
        id: 1,
        name: 'Лоферы'
    },
    {
        id: 2,
        name: 'Туфли'
    },
    {
        id: 3,
        name: 'Кроссовки'
    },
    {
        id: 4,
        name: 'Балетки'
    },
];

export const Colors = [
    {
        id: 1,
        name: 'Черный'
    },
    {
        id: 2,
        name: 'Красный'
    },
    {
        id: 3,
        name: 'Белый'
    },
    {
        id: 4,
        name: 'Темно-коричневый'
    }
];

export const Items = [
    {
        id: 1,
        colorId: 1,
        typeId: 1,
        brandId: 2,
        price: 511900,
        previewUrl: Image1
    },
    {
        id: 2,
        colorId: 3,
        typeId: 1,
        brandId: 2,
        price: 532800,
        previewUrl: Image2
    },
    {
        id: 3,
        colorId: 2,
        typeId: 4,
        brandId: 4,
        price: 182500,
        previewUrl: Image3
    },
    {
        id: 4,
        colorId: 3,
        typeId: 4,
        brandId: 2,
        price: 351100,
        previewUrl: Image4
    },
    {
        id: 5,
        colorId: 1,
        typeId: 1,
        brandId: 4,
        price: 319800,
        previewUrl: Image5
    },
    {
        id: 6,
        colorId: 4,
        typeId: 1,
        brandId: 2,
        price: 421500,
        previewUrl: Image6
    },
    {
        id: 7,
        colorId: 4,
        typeId: 1,
        brandId: 2,
        price: 556400,
        previewUrl: Image7
    },
    {
        id: 8,
        colorId: 1,
        typeId: 4,
        brandId: 4,
        price: 405000,
        previewUrl: Image8
    },
    {
        id: 9,
        colorId: 3,
        typeId: 1,
        brandId: 4,
        price: 405000,
        previewUrl: Image9
    },
];
