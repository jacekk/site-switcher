import Home from '../components/Home';
import { toggleNewCollectionDialog } from '../actions/layout';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    let lastPlayedId = state.player.lastPlayedCollectionId;
    if (! lastPlayedId && state.collections.length) {
        lastPlayedId = state.collections[0].id;
    }

    return {
        collections: state.collections || [], // @todo pass only the number of collections
        lastPlayedId: lastPlayedId || null,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            newCollectionDialog: () => {
                dispatch(toggleNewCollectionDialog(true));
            },
        },
    }
}

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomePage;
