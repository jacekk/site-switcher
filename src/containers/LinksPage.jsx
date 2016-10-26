import { connect } from 'react-redux';
import Links from '../components/Links';
import { moveCollectionLinkUp, removeCollectionLink } from '../actions/collections';

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
        },
    }
}

const LinksPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Links);

export default LinksPage;
