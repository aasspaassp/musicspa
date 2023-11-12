import { useEffect, useRef } from "react";

const useDOMControl = (domFunc) => {
    const domRef = useRef()
  
    useEffect(() => {
      domFunc(domRef.current)
    }, [])
  
    return (
      <div ref={domRef}>
      </div>
    )
  }

  export default useDOMControl;