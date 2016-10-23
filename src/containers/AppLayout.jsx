import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';

const mapStateToProps = (state) => {
    return {
        layout: state.layout,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMenuIconClick: () => {
            browserHistory.push('/');
        },
    }
}

const AppLayout = connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);

export default AppLayout;
