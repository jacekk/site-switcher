import { moveCollectionLinkUp, removeCollection, removeCollectionLink } from '../actions/collections';
import Links from '../components/Links';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const mapStateToProps = (state, props) => {
    const { collectionId } = props.routeParams;

    return {
        collection: state.collections[collectionId] || {},
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            moveLinkUp: (collectionId, linkIndex) => {
                dispatch(moveCollectionLinkUp(collectionId, linkIndex));
            },
            removeLink: (collectionId, linkIndex) => {
                dispatch(removeCollectionLink(collectionId, linkIndex));
            },
            removeCollection: (collectionId) => {
                dispatch(removeCollection(collectionId));
                browserHistory.push('/');
            },
        },
    }
}

const LinksPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Links);

export default LinksPage;
