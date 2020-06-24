import React from 'react';
import Aux from '../../hoc/Auxa';
import './Navigation.css';
import myLogo from '../../assets/logo.png';

const navigation = (props)=>{

    return (
        <Aux>
            <div className="theme-background ">
                    <div className="top-contact-bar">
                        <span className="institute-number"><i className="material-icons md-18">call</i>9993371161</span>
                    </div>
            </div>
            
            <nav >
                <div className="nav-wrapper">
                    <a href="#" className="brannd-logo">
                        <img className="institute-logo" src={myLogo} alt="MyLogo" />
                        <span className="institute-name">Prabha Institute of Civil Services</span>
                    </a>
                    <ul className="id_mobile" >
                        <li><a className="theme-color" href="#contact-section">Contact</a></li>
                        <li><a href="#join-section" className="Button">JOIN CLASSES</a></li>
                    </ul>
                </div>
            </nav>
        </Aux>
    );

};

export default navigation;