

import React from 'react';
import './style.css';
import cardIcon from '../../../images/cardIcon.png';
import outIcon from '../../../images/outIcon.png';

import { Progress,Button } from 'antd';


const SubCard = ()=>{

    return(
        <div className="sub-card-container" >

<Progress width={70}  strokeColor='#29E881' type="circle" percent={10} />

<div className="sub-card-title">
    <p>########</p>
    <p className="sub-main-title">#326  Leandro M.</p>
    <p className="sub-sub-title">+358414361234</p>

</div>

<div className="sub-card-icon">
    <img className="sub-icon-img" src={cardIcon} alt="card-icon" />
    <p>8 Items</p>

</div>


        </div>
    )
}

export default SubCard