


import React from 'react';
import './style.css';
import { Button } from 'antd';


const ButtonComponent =({value})=>{
    return(

        <Button className="card-btn" type="primary">{value} </Button>

    )
}

export default ButtonComponent