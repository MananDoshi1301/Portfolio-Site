import {useState, useEffect} from 'react'

const useScrollStatus = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();
    const totalDocScrollLength = docHeight - winHeight;    
    const scrollValue = Math.floor(scrollTop / totalDocScrollLength * 100);
    
    setScrollPosition(scrollValue); 
  }

  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        // this.calculateScrollDistance();
        calculateScrollDistance();
      });
    });
  }

  useEffect(()=>{
    listenToScrollEvent();
  },[scrollPosition])

  return scrollPosition;
}

export default useScrollStatus;