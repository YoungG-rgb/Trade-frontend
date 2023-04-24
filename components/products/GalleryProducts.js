import React, { useState } from 'react';

const Gallery = () => {
    // Массив с продуктами
    const [items, setItems] = useState([
        { id: 1, name: 'Продукт 1', color: 'red', price: 100, imageUrl: 'https://photo.watches.ru/121747/48189-s.jpg?ts=1570349809' },
        { id: 2, name: 'Продукт 2', color: 'blue', price: 200, imageUrl: 'https://photo.watches.ru/121745/48187-s.jpg?ts=1676628071' },
        { id: 3, name: 'Продукт 3', color: 'green', price: 150, imageUrl: 'https://photo.watches.ru/121746/48188-s.jpg?ts=1570349809' },
        { id: 4, name: 'Продукт 4', color: 'red', price: 300, imageUrl: 'https://www.bestwatch.ru/bigimage/Jacques%20Lemans/1-2022E.jpg' },
        { id: 5, name: 'Продукт 5', color: 'blue', price: 250, imageUrl: 'https://photo.watches.ru/121737/48179-b.jpg?ts=1676628069' },
        { id: 6, name: 'Продукт 6', color: 'green', price: 180, imageUrl: 'https://www.alltime.ru/obj/catalog/watch/jacques-lemans/img/big/1-2022F.jpg' },
    ]);

    // Состояния фильтров
    const [filterPrice, setFilterPrice] = useState('');
    const [filterColor, setFilterColor] = useState('');

    // Функция для обновления фильтра по ценам
    const handleFilterPrice = (e) => {
        setFilterPrice(e.target.value);
    };

    // Функция для обновления фильтра по цветам
    const handleFilterColor = (e) => {
        setFilterColor(e.target.value);
    };

    // Функция для сброса фильтров
    const handleResetFilters = () => {
        setFilterPrice('');
        setFilterColor('');
    };

    // Применение фильтров в продуктах
    const filteredItems = items.filter(
        (item) =>
            (filterPrice === '' || item.price <= filterPrice) &&
            (filterColor === '' || item.color === filterColor)
    );

    return (
        <div>
            <div className='bg-[#735CFF] rounded-[5px] pl-[165px] h-[140px] pt-[40px]'>
                <h1 className='not-italic font-normal text-[42px] leading-[25px] text-white'>Продукты</h1>
                <p className='not-italic font-normal text-[14px] leading-[12px] text-[#F9FAFE] mt-[25px]'>356 Total Products</p>
            </div>

            <div className='flex gap-[16px]'>
                <div>

                    <div>
                        <label htmlFor="filterPrice">Цена:</label>
                        <input
                            id="filterPrice"
                            type="number"
                            min="0"
                            value={filterPrice}
                            onChange={handleFilterPrice}
                        />
                    </div>
                    <div>
                        <label htmlFor="filterColor">Цвет:</label>
                        <select id="filterColor" value={filterColor} onChange={handleFilterColor}>
                            <option value="">Выбрать</option>
                            <option value="red">Красный</option>
                            <option value="blue">Синий</option>
                            <option value="green">Зеленый</option>
                        </select>
                    </div>
                    <button onClick={handleResetFilters}>Сбросить фильтры</button>

                </div>

                <ul className='flex gap-[29px] flex-wrap'>
                    {filteredItems.map((item) => (
                        <li key={item.id} className='rounded-[7px] text-center'>
                            <img className='w-[254px] h-[298px]' src={item.imageUrl} alt="image"/>
                            <p>Название: {item.name}</p>
                            <p>Цвет: {item.color}</p>
                            <p>Цена: {item.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Gallery;
