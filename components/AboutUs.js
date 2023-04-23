import React from 'react';

const AboutUs = () => {
    return (
        <div className='main_container'>
            <div className='flex items-center gap-[83px] mb-[170px]'>
                <div>
                    <h2 className='font-normal not-italic text-[42px] leading-[25px] text-black mb-[37px]'>About us</h2>
                    <p className='not-italic font-normal text-[14px] leading-[28px] text-[#939393]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan volutpat tristique metus, nibh
                        massa quam iaculis lectus. A dui nam phasellus porttitor nisi. Eget a quam est, eget dictum nisi.
                        Sit donec aenean vivamus sagittis, blandit. Eleifend bibendum aliquet orci risus, velit. Lectus
                        tellus amet
                    </p>
                </div>
                <div>
                    <div className='w-[578px]'>
                        {/*<a href="https://www.youtube.com/embed/s-x_HVCwKgI">*/}
                        {/*    <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path d="M0.300003 0.799988L24.3 15.2L0.300003 29.6V0.799988Z" fill="white"/>*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
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