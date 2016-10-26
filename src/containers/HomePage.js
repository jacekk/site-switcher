import Home from '../components/Home';
import { toggleNewCollectionDialog } from '../actions/layout';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    let lastPlayedId = state.player.lastPlayedCollectionId;
    const collectionsIds = Object.keys(state.collections);
    if (! lastPlayedId && collectionsIds.length) {
        lastPlayedId = collectionsIds[0];
    }

    return {
        noCollections: collectionsIds.length === 0,
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
