import React, { Component } from 'react';
import axios from 'axios';
import Action from './Action';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            details: null,
         }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        axios.get(`https://node-exp-sprint.herokuapp.com/api/projects/${id}`)
             .then(res => {
                 this.setState({details: res.data});
             })
             .catch(err => console.dir(err));
    }

    render() { 
        const {details} = this.state;
        if (details === null) {
            return (  
                <div>Loading...</div>    
            )
        } else {
            return (
                <div className="project">
                    <h2>{details.name}</h2>
                    <strong>{details.description}</strong>
                    {details.actions.map(action => <Action key={action.id} action={action} />)}
                </div>
            )
        }
    }
}

export default Project;