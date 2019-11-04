import React, {Component} from 'react';
import axios from 'axios';

const API_URL = '';

class NetFact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuItems : []
        };
    }

    componentDidMount () {
        const { getAccessToken } = this.props.auth;
        const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
        axios.get(`${API_URL}/NetFact`, { headers })
            .then(response => this.setState({ menuItems: response.data }))
            .catch(error => this.setState({ message: error.message }));
    }

    render() {
        return (
            <div className="container">
                <div className="card-columns">
                        {this.state.menuItems === null && <p>Loading menu...</p>}
                        {
                            this.state.menuItems && this.state.menuItems.map(item => (
                                <div key={item.name} class="card">
                                    <div class="card-header">{item.name}</div>
                                    <div class="card-body">
                                        <p class="card-text">{item.description}</p>
                                        <a href="#" class="btn btn-primary">More...</a>
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
        );
    }
}

export default NetFact;