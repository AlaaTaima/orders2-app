import React from 'react';
import './style.css';
import logo from '../../images/logo.png';
import {Button} from 'antd'

const MainBar = ({handleClick})=>{

    return(
        <div className="main-bar">
            <p className="main-bar-date">Jul 31, 2021</p>
            <img src={logo}  alt="logo"  />

            <div className="main-bar-account-details">

            <div className='main-bar-account-container'>

                <div className="main-bar-squar">
                </div>
                <div className="account-online">
                </div>
                </div>



                <div className='main-bar-account-container'>

            <div className="main-bar-account">
            <p className="account-name">M</p>
          
            </div>
            <div className="account-online">
                </div>


                </div>

                <Button className="switch-btn" type="primary" onClick={handleClick}>Switch Mode</Button>


            </div>



        </div>
    )

}

export default MainBar