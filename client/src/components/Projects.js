import React, {Component} from 'react';
import axios from 'axios';

class Projects extends Component {
    constructor() {
        super();
        this.state = { 
            projects: null,
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:9000/api/projects/')
             .then(res => this.setState({projects: res.data}))
             .catch(err => console.dir(err))
    }

    render() { 
        if (this.state.projects !== null) {
            return ( 
                <>
                {this.state.projects.map(project => <p key={project.id}>{project.name}</p>)}
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