import React, { Component } from 'react'
import loading from './loading.gif'
import PropTypes from 'prop-types'

const Spinner = ()=>{
  return (
        <div className="text-center">
        <img className="my-3"src={loading} alt="loading"/>
      </div>
    )
  
}

export default Spinner
