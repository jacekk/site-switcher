import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
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
        },
    };
};

const AppLayout = connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);

export default AppLayout;
