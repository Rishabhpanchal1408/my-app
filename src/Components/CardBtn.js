import React from 'react'

const CardBtn = (props) => {
  return (
    <button className={props.contactNumber != '' ? 'btn btn-dark' : 'btn btn-danger' }>
        {props.contactNumber != ''? props.contactNumber : 'No Contact details'}
    </button>
  )
}

export default CardBtn