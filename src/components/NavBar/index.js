
import React from 'react';
import './style.css';

const list = [
    'Business insights',
    'User',
    'Accounts',
    'Orders',
    'Menu editor',
    'Reports',
    'Settings'
  ];

const NavBar = ()=>{

    return(
        <div className='nav-bar'>
            {list.map(item=>(
                <p className={item === 'Orders' ?"active-item" :"nav-bar-item"}>{item}</p>
            )

        )}

        </div>
    )
}

export default NavBar
