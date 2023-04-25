import React, {useState} from "react";
import axios from "axios";
import {alertService} from "@/services/alert.service";

const baseUrl = 'http://localhost:8080'

const Footer = () => {
  const [userModel, setState] = useState({
    username: '',
    password: '',
    email: '',
    roleModels: [
      {
        id: '2',
        name: 'ROLE_USER'
      }
    ]
  })

  const sendCreateUserForm = async e => {
    e.preventDefault()
    const response = await axios.post(baseUrl + '/ext-api/users', userModel)
    if (response.data.resultCode === 'SUCCESS') {
      alertService.success('Поздравляю, вы успешно зарегистрировались! логин и пароль высланы по почте')
    } else {
      alertService.error('технические проблемы с сервером')
    }
  }

  const inputHandler = ({target}) => {
    const value = target.value;
    setState(prevState => ({...prevState, [target.name]: value}))
  }

  return (
    <div className=''>

      <div className='relative mb-[89px]'>
        <img className='w-full absolute top-0' src="/main/imgLoginBg.png" alt="img"/>
        <img className='w-full' src="/main/imgLoginShadow.png" alt="img"/>
        <div className='absolute top-[10%] left-[22%] text-center'>
          <h2 className='mb-[30px] not-italic font-bold text-[36px] leading-[45px] text-white'>
            Не упустите свой шанс получить бесплатную раздачу, зарегистрируйся сейчас! <br/>
          </h2>
          <p className='not-italic font-normal text-[14px] leading-[28px] text-white'>
            Мы будем информировать вас о предстоящих розыгрышах, предложениях,
            Ход подготовки интернет-магазина и старт продаж
          </p>

          <form className='mt-[38px]' onSubmit={sendCreateUserForm}>
            <div className='flex items-center justify-center gap-[19px]'>
              <label>
                <input className='bg-white rounded-[5px] pl-[15px] py-[10px] not-italic font-normal text-[14px] leading-[12px] text-black'
                       type="text" placeholder="Имя"
                       required value={userModel.username}
                       name="username" onChange={inputHandler}
                />
              </label>

              <label>
                <input className='bg-white rounded-[5px] pl-[15px] py-[10px] not-italic font-normal text-[14px] leading-[12px] text-black'
                       type="password" placeholder="Пароль"
                       required value={userModel.password}
                       name="password" onChange={inputHandler} />
              </label>

              <label>
                <input className='bg-white rounded-[5px] pl-[15px] py-[10px] not-italic font-normal text-[14px] leading-[12px] text-black'
                       type="text" placeholder="email"
                       required value={userModel.email}
                       pattern="^[a-zA-Z\d._%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$"
                       name="email" onChange={inputHandler} />
              </label>
            </div>

            <button className='text-white not-italic font-normal text-[14px] leading-[12px] py-[18px] px-[41px] bg-black rounded-[5px] mt-[30px] mb-[22px] hover:bg-gray-700 transition-all'
                    type='submit'> Зарегистрироваться
            </button>

            <p className='not-italic font-normal text-[14px] leading-[12x] text-white'>Вы соглашаетесь с нашими Условиями</p>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Footer;
