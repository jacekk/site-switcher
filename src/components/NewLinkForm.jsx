import { Component } from 'react';

class NewLinkForm extends Component {
    render() {
        return (
            <div>
                NewLinkForm
                <pre>{ JSON.stringify(this.props.routeParams, null, ' ') }</pre>
            </div>
        );
    }
}

export default NewLinkForm;