import React from 'react'
import Card from './Card'

const Users = ({senduser}) => {
    return (
        <div className='container-fluid'>
            {senduser.map(item => (
                <Card key={item.id} userdata={item} />
            ))}
        </div>
    )
}

export default Users