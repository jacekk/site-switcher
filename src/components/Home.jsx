import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Component } from 'react';
import { browserHistory } from 'react-router';

class Home extends Component {
    
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

export default Home;
