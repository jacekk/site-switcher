import EditCollectionDialog from '../containers/EditCollectionDialog';
import { history } from '../store';
import TableOfLinks from './TableOfLinks';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Component, PropTypes } from 'react';

const styles = {
    header: {
        wrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 80,
            marginRight: 30,
        },
        pageTitle: {
            fontSize: 32,
            lineHeight: '50px',
        },
        topBtns: {
            display: 'flex',
        },
        btn: {
            marginLeft: 10,
        },
    },
    mainSection: {
        padding: 10,
    },
    bottomBtns: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '20px 15px 10px',
    },
};

class Links extends Component {

    componentWillMount() {
        if (! this.props.collection.id) {
            history.push('/');
        }
    }

    goTo(pathSuffix) {
        const basePath = '/collections/' + this.props.collection.id;

        history.push(basePath + pathSuffix);
    }

    render() {
        const { title, links = [], id: collectionId } = this.props.collection;
        const { toggleEditCollectionDialog, toggleRemoveCollectionDialog, editCollection, moveLinkUp, removeLink, removeCollection } = this.props.actions;
        const collectionRemovalActions = [
            <FlatButton
                label="Discard"
                onTouchTap={toggleRemoveCollectionDialog.bind(null, false)}
            />,
            <FlatButton
                label="Remove"
                secondary={true}
                onTouchTap={removeCollection.bind(null, collectionId)}
            />,
        ];

        return (
            <div>
                <header style={styles.header.wrapper}>
                    <h1 style={styles.header.pageTitle} >
                        { title }
                    </h1>
                    <div style={styles.header.topBtns} >
                        <RaisedButton
                            label="Play"
                            style={styles.header.btn}
                            onClick={this.goTo.bind(this, '/play')}
                            disabled={! links.filter(item => item.isActive).length}
                            primary={true}
                        />
                        <RaisedButton
                            label="Edit title"
                            style={styles.header.btn}
                            onClick={editCollection}
                        />
                        <RaisedButton
                            label="Destroy"
                            secondary={true}
                            style={styles.header.btn}
                            onClick={toggleRemoveCollectionDialog.bind(null, true)}
                        />
                    </div>
                </header>
                <Divider />
                <section style={styles.mainSection}>
                    <TableOfLinks
                        links={links}
                        goTo={this.goTo.bind(this)}
                        moveUp={moveLinkUp.bind(this, collectionId)}
                        remove={removeLink.bind(this, collectionId)}
                    />
                    <Divider />
                    <div style={styles.bottomBtns} >
                        {
                            ! this.props.children &&
                            <RaisedButton
                                label="Add link"
                                onClick={this.goTo.bind(this, '/link')}
                                primary={! links.filter(item => item.isActive).length}
                            />
                        }
                    </div>
                </section>
                <Drawer
                    docked={false}
                    width={320}
                    openSecondary={true}
                    open={this.props.children !== null}
                >
                    {this.props.children}
                </Drawer>
                <Dialog
                    title="Edit collection title"
                    modal={false}
                    open={this.props.dialogs.isEditCollectionOpen}
                    onRequestClose={toggleEditCollectionDialog.bind(null, false)}
                >
                    <EditCollectionDialog id={collectionId} />
                </Dialog>
                <Dialog
                    actions={collectionRemovalActions}
                    modal={false}
                    open={this.props.dialogs.isRemoveCollectionOpen}
                    onRequestClose={toggleRemoveCollectionDialog.bind(null, false)}
                >
                    Do you really want to remove "{title}" collection?
                </Dialog>
            </div>
        );
    }
}

Links.propTypes = {
    collection: PropTypes.object.isRequired,
    dialogs: PropTypes.shape({
        isEditCollectionOpen: PropTypes.bool.isRequired,
        isRemoveCollectionOpen: PropTypes.bool.isRequired,
    }),
    actions: PropTypes.shape({
        editCollection: PropTypes.func.isRequired,
        moveLinkUp: PropTypes.func.isRequired,
        removeLink: PropTypes.func.isRequired,
        removeCollection: PropTypes.func.isRequired,
        toggleEditCollectionDialog: PropTypes.func.isRequired,
        toggleRemoveCollectionDialog: PropTypes.func.isRequired,
    }),
};

export default Links;
