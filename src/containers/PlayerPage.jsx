import { connect } from 'react-redux';
import Player from '../components/Player';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const PlayerPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);

export default PlayerPage;
