import React from 'react';
import Link from "next/link";

const Header = () => {

    const headerMenu = ['Главная','Продукты','Наша миссия','О нас','Часы']

    return (
        <header className='flex items-center justify-between main_container py-[16px]'>
            <div className='w-[270px]'>
                <img className='w-full bg-cover' src="/logo/logo.svg" alt="logo"/>
            </div>
            <ul className='flex items-center gap-[40px]'>
                        <li className='not-italic font-normal text-[14px] leading-[12px] text-[#939393] hover:text-[#000000] cursor-pointer
                  border-2
                  border-b-white
                  rounded-b-[2px]
                  border-t-0
                  border-r-0
                  border-l-0
                  transition
                  hover:border-b-indigo-500 pb-[5px]'><Link href='/'>Главная</Link></li>
                <li className='not-italic font-normal text-[14px] leading-[12px] text-[#939393] hover:text-[#000000] cursor-pointer
                  border-2
                  border-b-white
                  rounded-b-[2px]
                  border-t-0
                  border-r-0
                  border-l-0
                  transition
                  hover:border-b-indigo-500 pb-[5px]'><Link href='/products'>Продукты</Link></li>
                <li className='not-italic font-normal text-[14px] leading-[12px] text-[#939393] hover:text-[#000000] cursor-pointer
                  border-2
                  border-b-white
                  rounded-b-[2px]
                  border-t-0
                  border-r-0
                  border-l-0
                  transition
                  hover:border-b-indigo-500 pb-[5px]'><Link href='/'>Наша миссия</Link></li>
                <li className='not-italic font-normal text-[14px] leading-[12px] text-[#939393] hover:text-[#000000] cursor-pointer
                  border-2
                  border-b-white
                  rounded-b-[2px]
                  border-t-0
                  border-r-0
                  border-l-0
                  transition
                  hover:border-b-indigo-500 pb-[5px]'><Link href='/'>О нас</Link></li>
                <li className='not-italic font-normal text-[14px] leading-[12px] text-[#939393] hover:text-[#000000] cursor-pointer
                  border-2
                  border-b-white
                  rounded-b-[2px]
                  border-t-0
                  border-r-0
                  border-l-0
                  transition
                  hover:border-b-indigo-500 pb-[5px]'><Link href='/'>Часы</Link></li>
                <Link href='http://localhost:8080/login'>
                    <li className='not-italic font-normal text-[14px] leading-[12px] text-[#FFFFFF] hover:bg-blue-700 transition cursor-pointer bg-[#735CFF] py-[22px] px-[54px] rounded-[5px]'>Войти</li>
                </Link>
            </ul>
        </header>
    );
};

export default Header;
