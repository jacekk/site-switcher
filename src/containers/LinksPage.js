import { moveCollectionLinkUp, removeCollection, removeCollectionLink } from '../actions/collections';
import { toggleEditCollectionDialog } from '../actions/layout';
import Links from '../components/Links';
import { connect } from 'react-redux';
import { history } from '../store';

const mapStateToProps = (state, props) => {
    const { collectionId } = props.routeParams;

    return {
        collection: state.collections[collectionId] || {},
        dialogs: {
            isEditCollectionOpen: state.layout.editCollectionDialog.opened || false,
        },
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            editCollectionDialog: () => {
                dispatch(toggleEditCollectionDialog(true));
            },
            toggleEditCollectionDialog: () => {
                dispatch(toggleEditCollectionDialog(false));
            },
            moveLinkUp: (collectionId, linkIndex) => {
                dispatch(moveCollectionLinkUp(collectionId, linkIndex));
            },
            removeLink: (collectionId, linkIndex) => {
                dispatch(removeCollectionLink(collectionId, linkIndex));
            },
            removeCollection: (collectionId) => {
                dispatch(removeCollection(collectionId));
                history.push('/');
            },
        },
    }
}

const LinksPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Links);

export default LinksPage;
