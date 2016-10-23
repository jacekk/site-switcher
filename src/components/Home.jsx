import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

class Home extends Component {

    componentDidMount() {
        const { collections } = this.props;

        if (collections.length && this.props.lastPlayedId) {
            this.goTo(`/collections/${this.props.lastPlayedId}/play`);
        }
    }
    
    goTo(path) {
        browserHistory.push(path);
    }

    render() {
        return (
            <div>
                <Menu>
                    <MenuItem onTouchTap={this.goTo.bind(null, "/collections/col-987/play")} >
                        playing collection
                    </MenuItem>
                    <MenuItem onTouchTap={this.goTo.bind(null, "/collections/col-987")} >
                        collection page
                    </MenuItem>
                    <MenuItem onTouchTap={this.goTo.bind(null, "/collections/col-987/link")} >
                        new link page
                    </MenuItem>
                    <MenuItem onTouchTap={this.goTo.bind(null, "/collections/col-987/link/lin-123")} >
                        link edit page
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

Home.propTypes = {
    collections: PropTypes.array.isRequired,
    lastPlayedId: PropTypes.string,
};

export default Home;
