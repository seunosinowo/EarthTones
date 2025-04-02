import React from 'react'

const CopyRight = () => {
  const currentYear = new Date().getFullYear();

  return (
      <div className="w-full p-2 bg-green-950 justify-center items-center">
        <p className="text-sm text-center">
          &copy; {currentYear} EarthTones. All rights reserved.
        </p>
      </div>
  )
}

export default CopyRight
