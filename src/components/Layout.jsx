import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                <AppBar title="SiteSwitcher" onLeftIconButtonTouchTap={this.props.onMenuIconClick} />
                { this.props.children }
            </div>
        );
    }
}

export default Layout;
