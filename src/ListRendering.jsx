import React from 'react'

function ListRendering() {
    const names = ['try', 'test', 'teye']
    const nameList = names?.map((name, index) => <span key={index}>{name}, </span>)
    return (
        <div>{nameList} </div>
    )
}

export default ListRendering
