import React, { FC } from 'react'
import './style.scss'
interface Props {
  type: string;
  showName: string;
}

export const HeaderMenuItem:FC<Props> = ({ type, showName }) => {
  return (
    <li className='header-menu-item' >
      <a href={type} >
        { showName }
      </a>
    </li>
  )
}