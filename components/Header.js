import React, {useState} from 'react';
import Link from "next/link";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    let isAnonymous = true;
    // const headerMenu = ['Главная','Продукты','Наша миссия','О нас','Часы']

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
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret color="primary"> Настройки </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <Link href='http://localhost:8080/settings' hidden={isAnonymous}>
                                <li className='not-italic font-normal text-[14px] leading-[12px] text-[#FFFFFF] hover:bg-blue-700 transition cursor-pointer bg-[#735CFF] py-[22px] px-[54px] rounded-[5px]'>Профиль</li>
                            </Link>
                        </DropdownItem>

                        <DropdownItem>
                            <Link href='http://localhost:8080/orders' >
                                <li className='not-italic font-normal text-[14px] leading-[12px] text-[#FFFFFF] hover:bg-blue-700 transition cursor-pointer bg-[#735CFF] py-[22px] px-[54px] rounded-[5px]'>Заказы</li>
                            </Link>
                            <br />
                            <Link href='http://localhost:8080/cart' >
                                <li className='not-italic font-normal text-[14px] leading-[12px] text-[#FFFFFF] hover:bg-blue-700 transition cursor-pointer bg-[#735CFF] py-[22px] px-[54px] rounded-[5px]'>Корзина</li>
                            </Link>
                        </DropdownItem>

                        <DropdownItem divider/>

                        <DropdownItem className="text-dark">
                            <Link href='http://localhost:8080/login' hidden={!isAnonymous}>
                                <li className='not-italic font-normal text-[14px] leading-[12px] text-[#FFFFFF] hover:bg-blue-700 transition cursor-pointer bg-[#735CFF] py-[22px] px-[54px] rounded-[5px]'>Войти</li>
                            </Link>
                            <Link href='http://localhost:8080/logout' hidden={isAnonymous}>
                                <li className='not-italic font-normal text-[14px] leading-[12px] text-[#FFFFFF] hover:bg-blue-700 transition cursor-pointer bg-[#735CFF] py-[22px] px-[54px] rounded-[5px]'>Выйти</li>
                            </Link>
                        </DropdownItem>

                    </DropdownMenu>
                </Dropdown>
            </ul>
        </header>
    );
};

export default Header;
