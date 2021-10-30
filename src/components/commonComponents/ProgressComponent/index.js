



import React from 'react';
import './style.css';
import { Progress } from 'antd';


const ProgressComponent =({average})=>{
    return(

        <Progress  strokeColor='#29E881' type="circle" percent={average} />

    )
}

export default ProgressComponent