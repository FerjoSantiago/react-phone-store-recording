import React, {Fragment} from 'react';
import styled from 'styled-components';

export default function NavFooter() {
        return (

        <Fragment>

            <div className="container">
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
               {/*  https://www.iconfinder.com/icons/2431356/cellphone_chat_iphone_mobile_icon */}


              <div className="container iconos-sociales">

                <p className="text text-center">
                    Sìguenos en nuestras redes sociales
                </p>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ml-3">
                        <a 
                            href="https://www.facebook.com/FerjoSantiago?ref=bookmarks" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img alt="Sígueme en Facebook" 
                                height="50" 
                                width="50" 
                                src="https://2.bp.blogspot.com/-28mh2hZK3HE/XCrIxxSCW0I/AAAAAAAAH_M/XniFGT5c2lsaVNgf7UTbPufVmIkBPnWQQCLcBGAs/s1600/facebook.png" 
                                title="Sígueme en Facebook"
                            />
                        </a>
                    </li>
                </ul>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-3">
                        <a 
                            href="https://www.instagram.com/?hl=en" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <img 
                                    alt="Sígueme en Facebook" 
                                    height="50" 
                                    width="50" 
                                    src="https://4.bp.blogspot.com/-Ilxti1UuUuI/XCrIy6hBAcI/AAAAAAAAH_k/QV5KbuB9p3QB064J08W2v-YRiuslTZnLgCLcBGAs/s1600/instagram.png" 
                                    title="Sígueme en Instagram"
                                />
                        </a>
                    </li>
                </ul>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-3">
                        <a 
                            href="https://accounts.google.com/ServiceLogin/signinchooser?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com.mx%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <img 
                                    alt="Sígueme en Facebook" 
                                    height="50" 
                                    width="50" 
                                    src="https://3.bp.blogspot.com/-rZLDbfQdt4A/XCrIyYkW_XI/AAAAAAAAH_c/65QvUQJnv-oFNFS_aA3IDS57L_QPZbWfQCLcBGAs/s1600/google-plus.png"    
                                    title="ferjotulley@gmail.com"
                                />
                        </a>
                    </li>
                </ul>
                

              </div>
        
            </NavWrapper>

            <div className="py-3">

            </div>

            </div>
            
        </Fragment>
        );
    }
    //background: rgba(128,128,128, 0.5);

const NavWrapper = styled.nav `
background: rgba(128,128,128, 0.5);
.nav-link{
    color:var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
.iconos-sociales img{ 
    transition= "all 0.2s ease-out;
}
.iconos-sociales img:hover{
    border-radius:50px;
}
`;

  
