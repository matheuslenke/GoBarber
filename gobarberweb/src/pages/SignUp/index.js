import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/">Já tenho um login</Link>
      </form>
    </>
  );
}
