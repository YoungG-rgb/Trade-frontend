import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Продукт 1', color: 'red',code: '#FF0000', price: 17.588, imageUrl: 'https://photo.watches.ru/121747/48189-s.jpg?ts=1570349809' },
  { id: 2, name: 'Продукт 2', color: 'blue',code: '#0000FF', price: 20.588, imageUrl: 'https://photo.watches.ru/121745/48187-s.jpg?ts=1676628071' },
  { id: 3, name: 'Продукт 3', color: 'green',code: '#008000', price: 15.588, imageUrl: 'https://photo.watches.ru/121746/48188-s.jpg?ts=1570349809' },
  { id: 4, name: 'Продукт 4', color: 'yellow',code: '#FFFF00', price: 17.588, imageUrl: 'https://www.bestwatch.ru/bigimage/Jacques%20Lemans/1-2022E.jpg' },
  { id: 5, name: 'Продукт 5', color: 'purple',code: '#800080', price: 20.588, imageUrl: 'https://photo.watches.ru/121737/48179-b.jpg?ts=1676628069' },
  { id: 6, name: 'Продукт 6', color: 'purple',code: '#800080', price: 15.588, imageUrl: 'https://www.alltime.ru/obj/catalog/watch/jacques-lemans/img/big/1-2022F.jpg' },
];

const colorOptions = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
];

const FilteredProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedColor, setSelectedColor] = useState(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setFilteredProducts(products.filter((product) => product.color === color));
  };

  const handlePriceFilter = () => {
    let filtered = products;
    if (minPrice !== '') {
      filtered = filtered.filter((product) => product.price >= parseInt(minPrice));
    }
    if (maxPrice !== '') {
      filtered = filtered.filter((product) => product.price <= parseInt(maxPrice));
    }
    if (selectedColor !== null) {
      filtered = filtered.filter((product) => product.color === selectedColor);
    }
    setFilteredProducts(filtered);
  };

  const handleResetFilter = () => {
    setSelectedColor(null);
    setMinPrice('');
    setMaxPrice('');
    setFilteredProducts(products);
  };

  return (
    <div className='flex gap-4 h-[100vh]'>
      <div className='bg-[#e0f5ff] rounded-br-md rounded-tr-md p-3'>
        <div className=''>
          <p className='mb-[10px] font-semibold not-italic text-[16px] leading-[24px] text-[#000000]'>Ценовой диапазон:</p>
          <div className='flex gap-2 items-center my-[20px]'>
            <label>
              <input placeholder='$0' className='bg-[#FFFFFF] rounded-[3px] pl-[10px] w-[100px] h-[37px]' type="text" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            </label>
            <div>
              <p className='font-normal not-italic text-[16px] leading-[24px] text-[#939393]'>to</p>
            </div>
            <label>
              <input placeholder='$-- --' className='bg-[#FFFFFF] rounded-[3px] pl-[10px] w-[100px] h-[37px]' type="text" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            </label>
          </div>

          <div style={{border: '1px solid rgba(185, 183, 188, 0.2)'}}></div>

          <div className='my-[20px]'>
            <p className='mb-[10px] font-semibold not-italic text-[16px] leading-[24px] text-[#000000]'>Цветовая гамма:</p>
            <div className='flex items-center gap-2'>
              {colorOptions.map((color) => (
                <div
                  key={color}
                  className='w-[39px] h-[39px] rounded-[7px]'
                  style={{
                    backgroundColor: color,
                    border: selectedColor === color ? '2px solid #0b4acd' : '',
                  }}
                  onClick={() => handleColorClick(color)}
                />
              ))}
            </div>
          </div>

          <div style={{border: '1px solid rgba(185, 183, 188, 0.2)'}}></div>

          <div className='flex flex-col gap-1 my-[20px]'>
            <button className='hover:bg-indigo-800 transition-all bg-[#735CFF] rounded-[5px] text-white font-normal not-italic leading-[12px] text-[15px] w-[100%] h-[55px]' onClick={handlePriceFilter}>Apply Filters</button>
            <button className='hover:bg-red-500 transition-all bg-red-400 rounded-[5px] text-white font-normal not-italic leading-[12px] text-[15px] w-[100%] h-[55px]' onClick={handleResetFilter}>Reset</button>
          </div>
        </div>
      </div>
      <ul className='grid grid-cols-4 gap-[29px]'>
        {filteredProducts.map((item) => (
          <li key={item.id} className='rounded-[7px] flex flex-col gap-3 text-center bg-[#F9FAFE] p-5'>
            <img className='w-[200px] h-[200px] mb-[10px]' src={item.imageUrl} alt="image"/>
            <p className='not-italic font-normal text-[18px] leading-[9px] text-[#939393]'>{item.name}</p>
            <div>
              <p>Цена: <span className='font-normal not-italic text-[20px] leading-[19px] text-black'>${item.price}</span></p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredProducts;
