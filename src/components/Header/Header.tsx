import React from 'react';
import { ReactComponent as Joly } from '../../shared/icons/joly.svg'
import { ReactComponent as Dot } from '../../shared/icons/dot.svg'
import { ReactComponent as JolyDot } from '../../shared/icons/jolydot.svg'
import { ReactComponent as Bell } from '../../shared/icons/bell.svg'
import { HeaderMenuItem } from '../HeaderMenuItem/HeaderMenuItem'
import { headerMenuItems } from '../../shared/helpers/index'
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
            {headerMenuItems.map(({ type, showName }) => (
             <HeaderMenuItem type={type} showName={showName} />
            ))}
          </ul>
        </div>
      </header>
    )
}