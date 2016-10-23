import Home from '../components/Home';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        collections: state.collections || [],
        lastPlayedId: state.player.lastPlayedCollectionId || null,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomePage;
