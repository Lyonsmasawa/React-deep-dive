import React from 'react'
import { UserConsumer } from './userContext'

const User = () => {
    return (
        <UserConsumer>
                {username => {
                    return <div className="">Hello {username}</div>
                }}
        </UserConsumer>
    )
}

export default User
