import { addNewCollectionLink } from '../actions/collections';
import NewLinkForm from '../components/NewLinkForm';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    const { collectionId } = props.params;
    const collectionUrl = '/collections/' + collectionId;

    return {
        actions: {
            onCancel: () => {
                browserHistory.push(collectionUrl);
            },
            onSubmitCallback: (linkData) => {
                dispatch(addNewCollectionLink(linkData, collectionId));
                browserHistory.push(collectionUrl);
            },
        },
    }
}

const NewLinkContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewLinkForm);

export default NewLinkContainer;
