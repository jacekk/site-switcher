import { addNewCollectionLink } from '../actions/collections';
import LinkForm from '../components/LinkForm';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const mapStateToProps = () => {
    return {
        title: 'New link form',
        link: {},
    }
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
)(LinkForm);

export default NewLinkContainer;
