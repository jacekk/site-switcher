import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { toggleLeftDrawer } from '../actions/layout';

const mapStateToProps = (state) => {
    return {
        isLeftDrawerOpened: state.layout.leftDrawer.opened || false,
        collections: state.collections || [],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            toggleLeftDrawer: (showOnTrue) => {
                dispatch(toggleLeftDrawer(showOnTrue))
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