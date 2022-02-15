import React from 'react';
import { headerMenuItems } from '../../shared/helpers'
import { MenuItem } from '../MenuItem/MenuItem'
import visa from '../../shared/icons/visa.webp'
import wayforpay from '../../shared/icons/wayforpay.webp'
import privat24 from '../../shared/icons/privat24.webp'
import mastercard from '../../shared/icons/mastercard.webp'
import { ReactComponent as InstagramIcon } from '../../shared/icons/instagram.svg'
import { ReactComponent as VkIcon } from '../../shared/icons/vk.svg'
import { ReactComponent as JolyBellIcon } from '../../shared/icons/jolybell.svg'
import './style.scss'

export const Footer = () => {
  return (
    <footer className='footer' >
      <div className='first-floor' >
         <ul className='menu-list' >
           {
             headerMenuItems.map(({ type, showName }) => {
               return <MenuItem type={type} showName={showName} classname='footer' />
             })
           }
         </ul>
         <div className='footer-list' >
           <div className='footer-email' >
             <div className='footer-email-perfix'>e-mail:</div>
             <div className='footer-email-contact'>support@jolybell.com</div>
           </div>
           <div className='footer-paymentoptions' >
             <div className='footer-paymentoptions-prefix'>принимаем к оплате:</div>
             <div className='footer-paymentoptions-list' >
               <img className='footer-paymentoptions-visa' src={visa} />
               <img  className='footer-paymentoptions-wayforpay' src={wayforpay} />
             </div>
           </div>
         </div>
      </div>
      <div className='second-floor'>
        <div className='footer-socials' >
          <JolyBellIcon className='footer-socials-jolybell' />
          <InstagramIcon className='footer-socials-instagram' />
          <VkIcon className='footer-socials-vk' />
        </div>
        <div className='second-list' >
          <div className='footer-workinghours'>
            <div className='footer-workinghours-prefix' >время работы службы поддержки:</div>
            <div className='footer-workinghours-content' >ПН-ПТ: 9:00 - 21:00</div>
          </div>
          <div className='footer-paymentoptions' >
            <div className='footer-paymentoptions-list' >
              <img className='footer-paymentoptions-mastercard' src={mastercard} />
              <img  className='footer-paymentoptions-privat24' src={privat24} />
            </div>
          </div>
        </div>
      </div>
      <div className='third-floor' >
        <div className='footer-public-offer' >
          <span className='footer-public-offer-year' >© 2022, JolyBell.com</span>
          <a className='footer-public-offer-link' href='https://jolybell.com/public_offer.pdf'>
            Публичная оферта
          </a>
        </div>
        <div className='footer-post' >
          <p className='footer-post-information' >
            Доставка по России осуществляется службами доставки: «Почта России».
            <br />
            «Почта России» осуществляет доставку до почтового отделения, индекс которого Вы укажите при оформлении заказа.
          </p>
        </div>
      </div>
    </footer>
  )
}