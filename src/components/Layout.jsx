import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import { Component } from 'react';

import theme from  '../material_ui_raw_theme_file';

const styles = {
    mainContent: {
        zIndex: 10,
    },
    menuBtn: {
        zIndex: 10,
        position: 'fixed',
        background: theme.palette.accent2Color,
    },
    menuIcon: {
        color: theme.palette.primary3Color,
    },
};

class Layout extends Component {
    render() {
        return (
            <div className="app-layout">
                <IconButton
                    onTouchTap={this.props.onMenuIconClick}
                    style={styles.menuBtn}
                    iconStyle={styles.menuIcon}
                >
                    <MenuIcon />
                </IconButton>
                <div className="app-main-content" style={styles.mainContent}>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default Layout;
