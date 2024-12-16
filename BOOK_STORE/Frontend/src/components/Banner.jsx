import React from 'react'

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 ">
           Left
        </div>
        <div className="w-full md:w-1/2">
           Right
        </div>
    </div>
  )
}

export default Banner