import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navigation.module.css';

const Navigation = () => (
  <>
    <header>
      <img alt="Mobile menu button" src="https://img.icons8.com/material-rounded/24/ffffff/menu--v1.png" />
      <NavLink to="/">
        <h1 className={style.title}>Cripto Live</h1>
      </NavLink>
      <div className={style.icons}>
        <img alt="config button" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/ffffff/external-gear-settings-those-icons-fill-those-icons-1.png" />
      </div>
    </header>
  </>
);

export default Navigation;
