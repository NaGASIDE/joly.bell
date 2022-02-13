import React, { FC } from 'react'
import { Link } from "react-router-dom";
import './style.scss'
interface Props {
  type: string;
  showName: string;
  classname: string;
}

export const MenuItem:FC<Props> = ({ type, showName, classname }) => {
  return (
    <li className={`${classname}-menu-item`} >
      <Link to={type} >
        { showName }
      </Link>
    </li>
  )
}