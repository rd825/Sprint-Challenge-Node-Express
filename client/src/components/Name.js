import React from 'react'
import {Route} from 'react-router-dom';

const Name = props => {
    return (
        <Route render={({history}) => (
            <div onClick={() => { history.push(`/${props.project.id}`) }}>
                <h2 className='name'>{props.project.name}</h2>
            </div>
            )} 
        />
    )
}

export default Name;

