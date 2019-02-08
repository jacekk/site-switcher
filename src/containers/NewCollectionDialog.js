import { addNewCollection } from '../actions/collections';
import { toggleLeftDrawer, toggleNewCollectionDialog } from '../actions/layout';
import EditCollectionForm from '../components/EditCollectionForm';
import { connect } from 'react-redux';
import { history } from '../store';
import uuid from 'uuid';

const mapStateToProps = () => {
    return {
        id: '',
        title: '',
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            save: (title) => {
                const newId = uuid.v4();
                dispatch(addNewCollection(newId, title));
                dispatch(toggleNewCollectionDialog(false));
                dispatch(toggleLeftDrawer(false));
                history.push(`/collections/` + newId);
            },
            cancel: () => {
                dispatch(toggleNewCollectionDialog(false));
            },
        },
    }
}

const NewCollectionDialog = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditCollectionForm);

export default NewCollectionDialog;
