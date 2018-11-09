import React from 'react';

const Action = props => {
    return (
        <div className='action'>
            <strong>{props.action.description}</strong>
            <p>{props.action.notes}</p>
        </div>
    )
}

export default Action;