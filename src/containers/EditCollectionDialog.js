import { saveCollectionTitle } from '../actions/collections';
import { toggleEditCollectionDialog } from '../actions/layout';
import EditCollectionForm from '../components/EditCollectionForm';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
    return {
        id: props.id,
        title: state.collections[props.id].title || '',
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            save: (title, id) => {
                dispatch(saveCollectionTitle(id, title));
                dispatch(toggleEditCollectionDialog(false));
            },
            cancel: () => {
                dispatch(toggleEditCollectionDialog(false));
            },
        },
    }
}

const EditCollectionDialog = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditCollectionForm);

export default EditCollectionDialog;
