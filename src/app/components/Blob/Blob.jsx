"use client"
import React, { useEffect } from 'react'
import { useRef } from 'react'
import "./Blob.css"

const Blob = () => {
  const blobRef = useRef(null)

  useEffect(() => {
    const blob = blobRef.current

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      if (blob) {
        blob.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" });
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
