import { saveCollectionLink } from '../actions/collections';
import LinkForm from '../components/LinkForm';
import { history } from '../store';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
    const { collectionId, linkId } = props.params;
    const link = state.collections[collectionId].links[linkId] || {};

    return {
        title: 'Link edit form',
        link: Object.assign({}, link),
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const { collectionId, linkId } = props.params;
    const collectionUrl = '/collections/' + collectionId;

    return {
        actions: {
            onCancel: () => {
                history.push(collectionUrl);
            },
            onSubmitCallback: (linkData) => {
                dispatch(saveCollectionLink(linkData, collectionId, linkId));
                history.push(collectionUrl);
            },
        },
    }
}

const LinkEditContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkForm);

export default LinkEditContainer;
