import { moveCollectionLinkUp, removeCollection, removeCollectionLink } from '../actions/collections';
import { toggleEditCollectionDialog, toggleRemoveCollectionDialog } from '../actions/layout';
import Links from '../components/Links';
import { history } from '../store';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
    const { collectionId } = props.routeParams;

    return {
        collection: state.collections[collectionId] || {},
        dialogs: {
            isEditCollectionOpen: (state.layout.editCollectionDialog || {}).opened || false,
            isRemoveCollectionOpen: (state.layout.removeCollectionDialog || {}).opened || false,
        },
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            editCollection: () => {
                dispatch(toggleEditCollectionDialog(true));
            },
            toggleEditCollectionDialog: (toggle) => {
                dispatch(toggleEditCollectionDialog(toggle));
            },
            moveLinkUp: (collectionId, linkIndex) => {
                dispatch(moveCollectionLinkUp(collectionId, linkIndex));
            },
            removeLink: (collectionId, linkIndex) => {
                dispatch(removeCollectionLink(collectionId, linkIndex));
            },
            toggleRemoveCollectionDialog: (toggle) => {
                dispatch(toggleRemoveCollectionDialog(toggle));
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
