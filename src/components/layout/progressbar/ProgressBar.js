import React from 'react'
import { useTransform, useViewportScroll } from 'framer-motion';

const ProgressBar = () => {
  const { scrollYProgress } = useViewportScroll();
  const scrollWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  React.useEffect(() => {
    console.log(scrollWidth.current);
  }, [scrollWidth.current])
  const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '30px',
    backgroundColor: 'yellow'
  }
  return (
    <div>
      <div className='progressBar'>
        <div style={{ ...style, width: `${scrollWidth}` }}></div>
      </div>
    </div>
  )
}

export default ProgressBar
