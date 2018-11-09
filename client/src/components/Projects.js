import React, {Component} from 'react';
import axios from 'axios';
import Name from './Name';

class Projects extends Component {
    constructor() {
        super();
        this.state = { 
            projects: null,
        }
    }
    
    componentDidMount() {
        axios.get('https://node-exp-sprint.herokuapp.com/api/projects')
             .then(res => this.setState({projects: res.data}))
             .catch(err => console.dir(err))
    }

    render() { 
        if (this.state.projects !== null) {
            return ( 
                <>
                {this.state.projects.map(project => <Name key={project.id} project={project}/>)}
                </>
            );
        } else {
            return ( 
                <>Loading...</>
            );
        }
    }
}
 
export default Projects;