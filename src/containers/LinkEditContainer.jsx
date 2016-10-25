import { saveCollectionLink } from '../actions/collections';
import LinkForm from '../components/LinkForm';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const mapStateToProps = (state, props) => {
    const { collectionId, linkId } = props.params;

    return {
        title: 'Link edit form',
        link: state.collections[collectionId].links[linkId] || {},
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const { collectionId, linkId } = props.params;
    const collectionUrl = '/collections/' + collectionId;

    return {
        actions: {
            onCancel: () => {
                browserHistory.push(collectionUrl);
            },
            onSubmitCallback: (linkData) => {
                dispatch(saveCollectionLink(linkData, collectionId, linkId));
                browserHistory.push(collectionUrl);
            },
        },
    }
}

const LinkEditContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkForm);

export default LinkEditContainer;
