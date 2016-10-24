import { Component } from 'react';

class LinkEditForm extends Component {
    render() {
        return (
            <div>
                LinkEditForm
                <pre>{ JSON.stringify(this.props.routeParams, null, ' ') }</pre>
            </div>
        );
    }
}

export default LinkEditForm;
