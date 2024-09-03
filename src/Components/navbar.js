import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom'; 
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/logo.png';
import {useDispatch} from 'react-redux';

export const Navbar = () => {
  const location = useLocation();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };



  return (
    <header className="header">
      <div className="logo">
        <RouterLink to='/' className="logo-link">
          <img src={logo} alt="منصة زين التعليمية" />
        </RouterLink>
      </div>
        <nav className="nav">
          <ScrollLink to="footer" smooth={true} duration={500} className='link'>
            تواصل معنا
          </ScrollLink>
          <ScrollLink to="aboutus" smooth={true} duration={500} className='link'>
            من نحن
          </ScrollLink>
          <ScrollLink to="courses" smooth={true} duration={500} className='link'>
            الكورسات
          </ScrollLink>
          <ScrollLink to="grades" smooth={true} duration={500} className='link'>
            المراحل الدراسية
          </ScrollLink>
          <ScrollLink to="home" smooth={true} duration={500} className='link'>
            الرئيسية
          </ScrollLink>
        </nav>
        <div className="buttons">
        <button>
          حساب جديد
          <div class="arrow-wrapper">
              <div class="arrow"></div>
          </div>
        </button>
        <button>
          تسجيل دخول
          <div class="arrow-wrapper">
              <div class="arrow"></div>
          </div>
        </button>
      </div>
    </header>
  );
};
