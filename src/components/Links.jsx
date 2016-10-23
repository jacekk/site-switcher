import { Component } from 'react';

class Links extends Component {
    render() {
        return (
            <div>
                <span>Links</span>
                <pre>{ JSON.stringify(this.props.routeParams, null, ' ') }</pre>
                { this.props.children }
            </div>
        );
    }
}

export default Links;