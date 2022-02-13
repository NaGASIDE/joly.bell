import React from 'react';
import { headerMenuItems } from '../../shared/helpers'
import { MenuItem } from '../MenuItem/MenuItem'
import visa from '../../shared/icons/visa.webp'
import wayforpay from '../../shared/icons/wayforpay.webp'
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
        <div>

        </div>
        <div>

        </div>
      </div>
      <div className='third-floor' >

      </div>
    </footer>
  )
}