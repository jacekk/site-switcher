import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { toggleLeftDrawer, toggleNewCollectionDialog } from '../actions/layout';

const mapStateToProps = (state) => {
    return {
        collections: state.collections || {},
        isLeftDrawerOpened: state.layout.leftDrawer.opened || false,
        dialogs: {
            isNewCollectionOpen: state.layout.newCollectionDialog.opened || false,
        },
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            toggleLeftDrawer: (showOnTrue) => {
                dispatch(toggleLeftDrawer(showOnTrue))
            },
            toggleNewCollectionDialog: (showOnTrue) => {
                dispatch(toggleNewCollectionDialog(showOnTrue))
            },
            showCollection: (id) => {
                browserHistory.push(`/collections/${id}/`);
                dispatch(toggleLeftDrawer(false));
            },
            playCollection: (id) => {
                browserHistory.push(`/collections/${id}/play`);
                dispatch(toggleLeftDrawer(false));
            },
        },
    };
};

const AppLayout = connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);

export default AppLayout;
