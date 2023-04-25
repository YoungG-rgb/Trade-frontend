import React from 'react';

const Features = () => {
  return (
    <div className='main_container'>
      <div className='w-full mt-[75px] mb-[125px]'>
        <h2 className='text-center not-italic font-normal text-[42px] leading-[25px] text-black'>Функции</h2>
        <div className='flex justify-center relative'>
          <div className='mb-[20px] text-right w-[200px] h-[250px] absolute top-[100px] left-[-35px]'>
            <h2 className='not-italic font-medium text-[18px] leading-[12px] text-black'>Индивидуальный стиль</h2>
            <p className='not-italic font-normal text-[10px] leading-[24px] text-[#939393]'>48 стилевых комбинаций <br/>
              Изменение цвета циферблата <br/>
              15 вариантов ремешка <br/>
              Гравировка ремешка на заказ</p>
          </div>
          <div className='w-[340px] h-[250px] absolute top-[180px] right-[-150px]'>
            <h2 className='mb-[20px] not-italic font-medium text-[18px] leading-[12px] text-black'>Функции</h2>
            <p className='not-italic font-normal text-[10px] leading-[24px] text-[#939393]'>Размер корпуса: 42 мм <br/>
              Цвет корпуса: серебристый, черный, синий, скошенная кисть с зеркальной полировкой <br/>
              Цвет циферблата: черный металлик, меняющий цвет сине-фиолетовый, зелено-фиолетовый, розово-золотой <br/>
              Водонепроницаемость: 5 атм/50 метров <br/>
              Ремни: Быстросъемные <br/>
              Механизм: Швейцарские детали RONDA 762E<br/>
              Мгновенная скорость -10/+20 сек/месяц <br/>
              Стандартный срок службы батареи: 10 лет</p>
          </div>
          <div className='text-right w-[300px] h-[190px] absolute bottom-[10px] left-[-80px]'>
            <h2 className='mb-[20px] not-italic font-medium text-[18px] leading-[12px] text-black'>Компоненты высокого качества</h2>
            <p className='not-italic font-normal text-[10px] leading-[24px] text-[#939393]'>Корпус: нержавеющая сталь 316L <br/>
              Покрытие: цветное анодированное покрытие против царапин<br/>
              Стекло: сапфировое стекло<br/>
              Ремешки: браслет из нержавеющей стали диаметром 22 мм, браслет из миланской сетки, кожа.</p>
          </div>
          <img className='' src="/main/imgFeatures.png" alt="imgFeatures"/>
          <img className='absolute top-[110px] left-[187px]' src="/main/line1.svg" alt="line1"/>
          <img className='absolute top-[190px] right-[214px]' src="/main/line2.svg" alt="line2"/>
          <img className='absolute bottom-[140px] left-[255px]' src="/main/line3.svg" alt="line3"/>
          <div className='absolute top-[104px] left-[180px] w-[14px] h-[14px] bg-[#735CFF] rounded-full'></div>
          <div className='absolute top-[184px] right-[200px] w-[14px] h-[14px] bg-[#735CFF] rounded-full'></div>
          <div className='absolute bottom-[134px] left-[245px] w-[14px] h-[14px] bg-[#735CFF] rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
