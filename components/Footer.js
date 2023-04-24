import React from 'react';

const Footer = () => {

  return (
    <div className=''>

      <div className='relative mb-[89px]'>
        <img className='w-full' src="/main/imgLoginBg.svg" alt="img"/>
        <img className='w-full absolute top-0' src="/main/imgLoginShadow.svg" alt="img"/>
        <div className='absolute top-[10%] left-[22%] text-center'>
          <h2 className='mb-[30px] not-italic font-bold text-[36px] leading-[45px] text-white'>miss your chance to get free Giveaway <br/>
            Sing up to our newsletter</h2>
          <p className='not-italic font-normal text-[14px] leading-[28px] text-white'>We will inform you about coming Giveaways, Offers,
            Online Store preparation progress and start of sales</p>

          <form className='mt-[38px]'>
            <div className='flex items-center justify-center gap-[19px]'>
              <label>
                <input className='bg-white rounded-[5px] pl-[15px] py-[10px] not-italic font-normal text-[14px] leading-[12px] text-black' type="text" placeholder="Name"/>
              </label>
              <label>
                <input className='bg-white rounded-[5px] pl-[15px] py-[10px] not-italic font-normal text-[14px] leading-[12px] text-black' type="text" placeholder="Email"/>
              </label>
            </div>

            <button className='text-white not-italic font-normal text-[14px] leading-[12px] py-[18px] px-[41px] bg-black rounded-[5px] mt-[30px] mb-[22px] hover:bg-gray-700 transition-all' type='submit'>Sign Up</button>

            <p className='not-italic font-normal text-[14px] leading-[12x] text-white'>You agree to our Terms and Conditions</p>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Footer;
