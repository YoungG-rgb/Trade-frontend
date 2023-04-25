import React from 'react';

const AboutUs = () => {
  return (
    <div className='main_container'>
      <div className='flex items-center gap-[83px] mb-[170px]'>
        <div>
          <h2 className='font-normal not-italic text-[42px] leading-[25px] text-black mb-[37px]'>О нас</h2>
          <p className='not-italic font-normal text-[14px] leading-[28px] text-[#939393]'>
            <p> Volumenzeit Watches - это компания, которая специализируется на производстве высококачественных наручных часов.</p>
            <br/>

            <p>Наша компания была основана в 1995 году в Швейцарии, стране с богатой историей производства часов.</p>
            <br/>

            <p>
              Мы гордимся тем, что все наши часы производятся вручную в нашей мастерской в Швейцарии.
              Мы используем только самые качественные материалы, такие как нержавеющая сталь, золото и сапфировое стекло,
              чтобы обеспечить долговечность и надежность наших часов.
            </p>
          </p>
        </div>
        <div>
          <div className='w-[578px]'>
            <iframe className='rounded-[5px]' width="560" height="315" src="https://www.youtube.com/embed/s-x_HVCwKgI"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
