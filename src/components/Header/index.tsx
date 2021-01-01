import React from 'react';
import logoImg from '../../assets/logo.png';
import { HeaderMenu, Nav, Logo } from './styles';

const Header: React.FC = () => (
  <HeaderMenu>
    <Logo>
      <a href="logo">
        <img src={logoImg} alt="Drogaraia logo" />
      </a>
    </Logo>
    <Nav>
      <ul>
        <li>
          <a href="html5">html5</a>
        </li>
        <li>
          <a href="css3">css3</a>
        </li>
        <li>
          <a href="javascript">javascript</a>
        </li>
        <li>
          <a href="react">react</a>
        </li>
        <li>
          <a href="redux">redux</a>
        </li>
      </ul>
    </Nav>
  </HeaderMenu>
);

export default Header;
