import { history } from '../store';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Component, PropTypes } from 'react';

const styles = {
    wrapper: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogBtn: {
        marginTop: 20,
    },
    noCollectionsMsg: {
        fontSize: 30,
        paddingBottom: 10,
    },
};

class Home extends Component {

    componentDidMount() {
        if (! this.props.noCollections && this.props.lastPlayedId) {
            history.push(
                `/collections/${this.props.lastPlayedId}/play`
            );
        }
    }

    render() {
        const { newCollectionDialog } = this.props.actions;

        return (
            <div style={styles.wrapper} >
                <div style={styles.noCollectionsMsg} >
                    There are no collections to play with. Please, add some :)
                </div>
                <FloatingActionButton
                    style={styles.dialogBtn}
                    onClick={newCollectionDialog.bind(null)}
                >
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}

Home.propTypes = {
    noCollections: PropTypes.bool.isRequired,
    lastPlayedId: PropTypes.string,
    actions: PropTypes.shape({
        newCollectionDialog: PropTypes.func.isRequired,
    }),
};

export default Home;
