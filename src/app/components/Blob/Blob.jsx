import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import "./blob.css"

const Blob = () => {
  const blobRef = useRef(null)

  useEffect(() => {
    const blob = blobRef.current

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      if (blob) {
        // blob.style.left = `${clientX}px`;
        // blob.style.top = `${clientY}px`;
        blob.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, {duration: 3000, fill: "forwards"});
      }
    }

    document.body.addEventListener("pointermove", handlePointerMove)

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove)
    }
  }, [])

  return (
    <>
      <div className="blob" id='blob' ref={blobRef}></div>
    </>
  )
}

export default Blob
