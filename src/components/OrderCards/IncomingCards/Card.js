
import React from 'react';
import './style.css';
import cardIcon from '../../../images/cardIcon.png';

import {ButtonComponent,
    ProgressComponent,
    CardComponent} from '../../commonComponents'



const Card = ({average})=>{

    return(
        <div className="main-card-container"
           >
            <div className="main-title">
                <div className="main-title-content">
                    <p>Supplier:</p>
                    <p>$$$$$$$$$$$</p>
                </div>

                <img className="in-icon-img" src={cardIcon} alt="card-icon" />

            </div>
            <div className="card-avg">
            <ProgressComponent average={average} />

                <p  className="card-avg-value">#326  Leandro M.</p>
                <p  className="card-avg-num">+358414361234</p>
            </div>

            <CardComponent />

            <div className="card-list">
                <div className='card-list-item'>
                    <div className='list-item-num'>
                        <p>1 x</p>
                    </div>
                    <p className='list-item-value'>Americana</p>
                </div>

                <div className='card-list-item'>
                    <div className='list-item-num'>
                        <p>1 x</p>
                    </div>
                    <p className='list-item-value'>Mexicana</p>
                </div>

                <div className='card-list-item'>
                    <div className='list-item-num'>
                        <p>1 x</p>
                    </div>
                    <p className='list-item-value'>Hawaii</p>
                </div>

                <div className='card-list-gray'>
                    <div className='list-item-num'>
                        <p></p>
                    </div>
                    <p className='list-item-gray'>Extra capris</p>
                </div>


            </div>

            <div className ="card-border">

            </div>
            <p className="card-border-text">41,00 €</p>

            <ButtonComponent value="Ready to Deliver" />

            <p className="card-cancel-btn">Cancel</p>
            
        </div>
    )
}

export default Card