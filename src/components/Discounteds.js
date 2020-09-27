import React from 'react'
import jeans1 from '../assets/jeans1.jpg'
import jeans2 from '../assets/jeans2.jpg'
import jeans3 from '../assets/jeans3.jpg'

export default function Header (props) {
  return (
    <div className='container header-bg'>
      <div className='row' style={{ height: 420 }}>
        <div className='col-12 dark-transparent d-flex flex-column justify-content-center align-items-center'>
          <h1 className="text-shadow text-center mb-1 text-white" href="#">WELCOME TO MY STORE</h1>
          <h5 className="mb-1 text-shadow text-center text-white" href="#">Up to 30% off women jackets!</h5>
        </div>

      </div>

    </div>
  )
}