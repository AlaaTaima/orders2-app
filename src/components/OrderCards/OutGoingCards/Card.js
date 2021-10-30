

import React from 'react';
import './style.css';
import cardIcon from '../../../images/cardIcon.png';
import outIcon from '../../../images/outIcon.png';

import {ButtonComponent,
    ProgressComponent,
    CardComponent} from '../../commonComponents'


const Card = ({average})=>{
    return(
        <div className="out-main-card-container"  >
            <div className="out-main-title">
                <div className="out-main-title-content">
                    <p>Supplier:</p>
                    <img src={outIcon} alt="card-icon" />
                </div>

                <img className="out-icon-img" src={cardIcon} alt="card-icon" />

            </div>
            <div className="out-card-avg">

            <ProgressComponent average={average} />

                <p  className="out-card-avg-value">#327  Sam A.</p>
                <p  className="out-card-avg-num">+358414361234</p>
            </div>

            <CardComponent />

            <div className="out-card-list">
                <p className="out-card-num">6 Items</p>
                <p className="out-card-text">Show all Items</p>


            </div>

            <div className ="out-card-border">

            </div>
            <p className="out-card-border-text">41,00 €</p>

            <ButtonComponent  value="Next"/>

            <p className="out-card-cancel-btn">Cancel</p>
            
        </div>
    )
}

export default Card