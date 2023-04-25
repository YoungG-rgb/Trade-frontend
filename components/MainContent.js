import React from 'react';

const MainContent = () => {
    return (
        <div className='main_container'>
            <div className='mt-[179px] mb-[330px]'>
                <h1 className='not-italic font-normal text-[60px] leading-[50px] text-black mb-[25px]'>Найди часы <br/> своей мечты</h1>
                <p className='mb-[30px] not-italic font-normal text-[14px] leading-[28px] text-[#939393]'>
                    Добро пожаловать на страницу Volumenzeit Watches - вашего надежного партнера в мире часового искусства!
                    <br/>
                    Мы являемся лидерами в производстве высококачественных наручных часов,
                    <br/>
                    которые сочетают в себе прекрасный дизайн, надежность и техническое совершенство.
                </p>

                <div className='absolute top-[140px] z-[-1] right-0'>
                    <img className='' src="/main/imgMain.png" alt="imgMain"/>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
