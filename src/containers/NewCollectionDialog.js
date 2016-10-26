import { addNewCollection } from '../actions/collections';
import { toggleLeftDrawer, toggleNewCollectionDialog } from '../actions/layout';
import NewCollectionForm from '../components/NewCollectionForm';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import uuid from 'uuid';

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            save: (newTitle) => {
                const newId = uuid.v4();
                dispatch(addNewCollection(newId, newTitle));
                dispatch(toggleNewCollectionDialog(false));
                dispatch(toggleLeftDrawer(false));
                browserHistory.push(`/collections/` + newId);
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
)(NewCollectionForm);

export default NewCollectionDialog;
