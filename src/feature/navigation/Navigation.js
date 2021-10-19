import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <>
    <header>
      <div>
        <NavLink to="/" />
        <h1>Cripto Live</h1>
      </div>
    </header>
    <hr />
  </>
);

export default Navigation;
