import React from 'react'

const Memo = ({name}) => {
  return (
    <div>
      {name}
      Refs - access dom nodes - in class components create it in the constructor
      <input />
    </div>
  )
}

export default React.memo(Memo)
