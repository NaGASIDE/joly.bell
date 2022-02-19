import React from 'react';
import { ChangeLanguage } from './ChangeLanguage/ChangeLanguage'
import { MenuItem } from '../MenuItem/MenuItem'
import { ReactComponent as JolyDot } from '../../shared/icons/jolydot.svg'
import { ReactComponent as Bell } from '../../shared/icons/bell.svg'
import {headerMenuItems, IHeaderMenuItem } from '../../shared/helpers'
import './style.scss';

export const Header = () => {
    return (
      <header className='header'>
        <div className='header-first'>
          <div className='header-leftStrip'/>
          <a className='header-logo' >
            <div className='header-inside'>
              <div className='logo header-logo-logo'>
                <div className='logo-content'>
                  <div className='logo-left'>
                    <JolyDot />
                  </div>
                  <div className='logo-right'>
                    <div className='logo-bell' >
                      <Bell />
                    </div>
                  </div>
                  <div className='logo-strip-top'/>
                  <div className='logo-strip-bottom'/>
                </div>
              </div>
            </div>
          </a>
          <div className='header-rightStrip' />
        </div>
        <div className='header-second' >
          <ul className='header-menu' >
            {headerMenuItems.map(({ type, showName }: IHeaderMenuItem) => (
             <MenuItem type={type} showName={showName} classname='header' />
            ))}
          </ul>
          <div className='header-second-menu' >
            <div className='header-second-menu-other' >
              <ChangeLanguage />
            </div>
            <div className='header-second-account' >

            </div>
            <div className='header-second-card' >

            </div>
          </div>
        </div>
      </header>
    )
}