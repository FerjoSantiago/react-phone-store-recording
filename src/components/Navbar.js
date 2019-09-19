import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './ButtonN';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
               {/*  https://www.iconfinder.com/icons/2431356/cellphone_chat_iphone_mobile_icon */}

                <Link to={'/'}>
                    <img 
                        src={logo} 
                        alt="store" 
                        className="navbar-brand"
                    />
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to={"/"} className="nav-link">
                        <i class="fas fa-home"></i> {''}
                            Inicio
                        </Link>
                    </li>
                </ul>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to={"/producto"} className="nav-link">
                            <i class="fas fa-mobile-alt"></i> {''}
                            Celulares
                        </Link>
                    </li>
                </ul>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to={"/computadora"} className="nav-link">
                            <i class="fas fa-tv"></i> {''}
                            PC
                        </Link>
                    </li>
                </ul>
                
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                       <span className="mr-2">
                        <i className="fas fa-shopping-cart"></i> {''}
                       </span>
                        Mi carrito
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav `
background-image: linear-gradient(to right, rgba(235,170,93), rgba(57,128,155) );
.nav-link{
    color:var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`;

