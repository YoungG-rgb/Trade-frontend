import React from 'react';

const OurMission = () => {
    return (
        <div className='w-full mb-[106px]'>
            <div className='flex h-[500px] relative'>
                <div className='flex relative'>
                    <img className='h-[450px] w-[600px]' src="/main/imgModelMission.png" alt="modelMission"/>
                    <img className='absolute right-0 h-full' src="/main/bgShadowMission.svg" alt=""/>
                </div>
                <div className='bg-black w-full relative'>
                    <div className='ourMissionBlock'>
                        <h2 className='mb-[40px] font-normal not-italic text-[42px] leading-[25px] text-white'>Наша миссия</h2>
                        <p className='w-[300px] not-italic font-normal text-[14px] leading-[28px] text-[#DEDEDE]'>
                            Мы вложили 6 лет своей жизни, чтобы изобрести новую технологию производства 3D циферблатов с качеством индустрии наручных часов.
                            <br/>
                            Все, что нам нужно, чтобы включить наше воображение на максимум.
                            <br/>
                            Мы любим нестандартные дизайны и верим, что есть много людей, которые думают так же.
                        </p>
                    </div>
                </div>
                <div className='figure absolute right-[-150px]'></div>
                <div className='figure absolute bottom-[-50px] left-[300px]'></div>
            </div>
        </div>
    );
};

export default OurMission;
