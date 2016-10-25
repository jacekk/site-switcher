import { connect } from 'react-redux';
import Links from '../components/Links';
import { moveCollectionLinkUp, moveCollectionLinkDown } from '../actions/collections';

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
            moveLinkDown: (collectionId, linkIndex) => {
                dispatch(moveCollectionLinkDown(collectionId, linkIndex));
            },
        },
    }
}

const LinksPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Links);

export default LinksPage;
