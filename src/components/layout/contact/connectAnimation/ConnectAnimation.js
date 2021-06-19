import React from 'react';
import useScrollStatus from '../../../hooks/useScrollStatus';
import gif from '../../../images/phoneRinging.gif';

const ConnectAnimation = () => {

    const scrollPosition = useScrollStatus();

    const style = {
        position: 'relative',
        transition: 'all 0.3s ease',
    }

    const scrollMove = () => {
        let min = 60;
        // let max = 70;
        let position = 0;
        if(scrollPosition>=min){
            position = (scrollPosition-min)*4;
        }
        return position;
    }

    return (
        <div>{console.log(scrollPosition)}            
            <img src={gif} style={{...style, left:`${scrollMove()}%`}} className='img-fluid w-25' alt="" />
        </div>
    )
}

export default ConnectAnimation
