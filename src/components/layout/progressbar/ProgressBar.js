import React, { useEffect, useState } from 'react';
import useScrollStatus from '../../hooks/useScrollStatus';

const ProgressBar = () => {
  const scrollPosition = useScrollStatus();
  
  const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '15px',
    background: 'linear-gradient( to right, #FDC830 , #F37335)',
    zIndex: 1,
  }
  return (
    <div>
      <div className='progressBar'>
        <div style={{ ...style, width: `${scrollPosition}%` }}></div>
      </div>
    </div>
  )
}

export default ProgressBar
