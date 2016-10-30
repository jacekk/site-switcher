import { collectionStartedPlaying, playNextLink } from '../actions/player';
import Player from '../components/Player';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
    const { collectionId } = props.routeParams;
    const linkId = state.player.currentLinkId;
    const links = (state.collections[collectionId] || {}).links || [];
    const activeLinks = links.filter(item => item.isActive);
    const link = activeLinks[linkId] || {};

    let nextLinkId = linkId + 1;
    if (nextLinkId > activeLinks.length - 1) {
        nextLinkId = 0;
    }

    return {
        currLinkId: linkId,
        nextLinkId,
        link: Object.assign({}, link),
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const { collectionId } = props.routeParams;

    return {
        actions: {
            collectionStartedPlaying: (linkId) => {
                dispatch(collectionStartedPlaying(linkId, collectionId));
            },
            playNextLink: (nextLinkId) => {
                dispatch(playNextLink(nextLinkId, collectionId));
            },
        },
    }
}

const PlayerPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);

export default PlayerPage;
