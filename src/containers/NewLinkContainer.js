import { addNewCollectionLink } from '../actions/collections';
import LinkForm from '../components/LinkForm';
import { history } from '../store';
import { connect } from 'react-redux';

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
                history.push(collectionUrl);
            },
            onSubmitCallback: (linkData) => {
                dispatch(addNewCollectionLink(linkData, collectionId));
                history.push(collectionUrl);
            },
        },
    }
}

const NewLinkContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkForm);

export default NewLinkContainer;
