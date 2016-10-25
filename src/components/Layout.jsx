import NewCollectionDialog from '../containers/NewCollectionDialog';
import theme from '../material_ui_raw_theme_file';
import CollectionsMenu from './CollectionsMenu';
import Dialog from 'material-ui/Dialog';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import { Component, PropTypes } from 'react';

const styles = {
    mainContent: {
        zIndex: 10,
    },
    menuBtn: {
        zIndex: 10,
        position: 'fixed',
        background: theme.palette.primary1Color,
    },
    menuIcon: {
        color: '#fff',
    },
};

class Layout extends Component {
    render() {
        const { toggleLeftDrawer, toggleNewCollectionDialog, showCollection, playCollection } = this.props.actions;

        return (
            <div className="app-layout">
                <IconButton
                    onTouchTap={toggleLeftDrawer.bind(this, true)}
                    style={styles.menuBtn}
                    iconStyle={styles.menuIcon}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    docked={false}
                    width={400}
                    open={this.props.isLeftDrawerOpened}
                    onRequestChange={ (open) => toggleLeftDrawer(open) }
                >
                    <CollectionsMenu
                        items={this.props.collections}
                        newItem={toggleNewCollectionDialog}
                        show={showCollection}
                        play={playCollection}
                    />
                </Drawer>
                <Dialog
                    title="Adding new collection"
                    modal={false}
                    open={this.props.dialogs.isNewCollectionOpen}
                    onRequestClose={toggleNewCollectionDialog.bind(null, false)}
                >
                    <NewCollectionDialog />
                </Dialog>
                <div className="app-main-content" style={styles.mainContent}>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    collections: PropTypes.object.isRequired,
    isLeftDrawerOpened: PropTypes.bool.isRequired,
    dialogs: PropTypes.shape({
        isNewCollectionOpen: PropTypes.bool.isRequired,
    }),
    actions: PropTypes.shape({
        toggleLeftDrawer: PropTypes.func.isRequired,
        toggleNewCollectionDialog: PropTypes.func.isRequired,
        showCollection: PropTypes.func.isRequired,
        playCollection: PropTypes.func.isRequired,
    }),
};

export default Layout;
