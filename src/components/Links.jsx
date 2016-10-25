import TableOfLinks from './TableOfLinks';
import Divider from 'material-ui/Divider';
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
    sectionsWrapper: {
        display: 'flex',
    },
    right: {
        wrapper: {
            flexGrow: 1,
        },
    },
    left: {
        wrapper: {
            flexGrow: 1,
            padding: 10,
        },
        bottomBtns: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: 30,
            marginBottom: 10,
        },
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
        const { moveLinkUp, moveLinkDown } = this.props.actions;

        return (
            <div>
                <header style={styles.header.wrapper}>
                    <h1 style={styles.header.pageTitle} >
                        { title }
                    </h1>
                    <div style={styles.header.topBtns} >
                        <RaisedButton
                            label="Destroy"
                            secondary={true}
                            style={styles.header.btn}
                            onClick={() => alert('@todo: add modal')}
                        />
                        {
                            links.length ?
                            <RaisedButton
                                label="Play"
                                primary={true}
                                style={styles.header.btn}
                                onClick={this.goTo.bind(this, '/play')}
                            /> :
                            null
                        }
                    </div>
                </header>
                <Divider />
                <div style={styles.sectionsWrapper}>
                    <section style={styles.left.wrapper}>
                        <TableOfLinks
                            links={links}
                            goTo={this.goTo.bind(this)}
                            moveUp={moveLinkUp.bind(this, collectionId)}
                        />
                        <Divider />
                        <div style={styles.left.bottomBtns} >
                            <FloatingActionButton
                                onClick={this.goTo.bind(this, '/link')}
                            >
                                <ContentAdd />
                            </FloatingActionButton>
                        </div>
                    </section>
                    <section style={styles.right.wrapper}>
                        { this.props.children }
                    </section>
                </div>
            </div>
        );
    }
}

Links.propTypes = {
    collection: PropTypes.object.isRequired,
    actions: PropTypes.shape({
        moveLinkUp: PropTypes.func.isRequired,
    }),
};

export default Links;
