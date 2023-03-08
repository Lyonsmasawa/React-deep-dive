import React from 'react'

const Form = () => {
  return (
    <div>
      Controlled components - elements like forms whose value is controlled by react
use onChange handler to update it (event is automatically passed to onchange, then use event.target.value) e.preventDefault - prevents reload on submit, type='submit' helps user submit by clicking on enter thus good user experience
    </div>
  )
}

export default Form
