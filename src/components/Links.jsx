import EditCollectionDialog from '../containers/EditCollectionDialog';
import TableOfLinks from './TableOfLinks';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

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
            browserHistory.push('/');
        }
    }

    goTo(pathSuffix) {
        const basePath = '/collections/' + this.props.collection.id;

        browserHistory.push(basePath + pathSuffix);
    }

    render() {
        const { title, links = [], id: collectionId } = this.props.collection;
        const { toggleEditCollectionDialog, editCollectionDialog, moveLinkUp, removeLink, removeCollection } = this.props.actions;

        return (
            <div>
                <header style={styles.header.wrapper}>
                    <h1 style={styles.header.pageTitle} >
                        { title }
                    </h1>
                    <div style={styles.header.topBtns} >
                        <RaisedButton
                            label="Play"
                            primary={true}
                            style={styles.header.btn}
                            onClick={this.goTo.bind(this, '/play')}
                            disabled={!links.filter(item => item.isActive).length}
                        />
                        <RaisedButton
                            label="Edit title"
                            primary={true}
                            style={styles.header.btn}
                            onClick={editCollectionDialog}
                        />
                        <RaisedButton
                            label="Destroy"
                            secondary={true}
                            style={styles.header.btn}
                            onClick={removeCollection.bind(this, collectionId)}
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
                            <FloatingActionButton onClick={this.goTo.bind(this, '/link')} >
                                <ContentAdd />
                            </FloatingActionButton>
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
            </div>
        );
    }
}

Links.propTypes = {
    collection: PropTypes.object.isRequired,
    actions: PropTypes.shape({
        editCollectionDialog: PropTypes.func.isRequired,
        moveLinkUp: PropTypes.func.isRequired,
        removeLink: PropTypes.func.isRequired,
        removeCollection: PropTypes.func.isRequired,
    }),
};

export default Links;
