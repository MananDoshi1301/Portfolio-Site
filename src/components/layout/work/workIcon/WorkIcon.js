import React from 'react'
import useScrollStatus from '../../../hooks/useScrollStatus';
import './WorkIcon.css';
import finance from '../../../images/icons/finance.png';
import color from '../../../images/icons/color.png';
import report from '../../../images/icons/report.png';
import briefcase from '../../../images/icons/briefcase.png';
import scale from '../../../images/icons/scale.png';
import financeReport from '../../../images/icons/financeReport.png';
import scissor from '../../../images/icons/scissor.png';
import colorOption from '../../../images/icons/colorOption.png';

const WorkIcon = () => {
  const scrollPosition = useScrollStatus();
  const addedScroll = () => {
    let position = scrollPosition;
    let number = 35;
    position = Math.pow((1.068+(scrollPosition-number)*0.002515), scrollPosition);      
    return(position+'%');
  }
  const styles = {
    position: 'absolute',
    zIndex: -1,
    opacity: addedScroll(),
  }
  function getRandomNumberBetween(min,max){
    return (Math.random()*(max-min+1)+min);
  }

  return (
    <div>
      <div>
        <img className='workIcon-icon workIcon-icon1' src={scissor} alt="" style={{ ...styles, top:'0%', left:'0%'}}/>
        <img className='workIcon-icon workIcon-icon2' src={finance} alt="" style={{ ...styles, top:'-25%', left:'7%'}}/>
        <img className='workIcon-icon workIcon-icon3' src={color} alt="" style={{ ...styles, top:'-40%', left:'23%'}}/>
        <img className='workIcon-icon workIcon-icon4' src={scale} alt="" style={{ ...styles, top:'-30%', right:'55%'}}/>
        <img className='workIcon-icon workIcon-icon5' src={report} alt="" style={{ ...styles, top:'-25%', left:'55%'}}/>
        <img className='workIcon-icon workIcon-icon6' src={financeReport} alt="" style={{ ...styles, top:'-40%', right:'20%'}}/>
        <img className='workIcon-icon workIcon-icon7' src={briefcase} alt="" style={{ ...styles, top:'-20%', right:'5%'}}/>
        <img className='workIcon-icon workIcon-icon8' src={colorOption} alt="" style={{ ...styles, top:'20%', right:0}}/>
      </div>
    </div>
  )
}

export default WorkIcon
