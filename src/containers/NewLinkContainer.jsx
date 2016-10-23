import { connect } from 'react-redux';
import NewLinkForm from '../components/NewLinkForm';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const NewLinkContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewLinkForm);

export default NewLinkContainer;
