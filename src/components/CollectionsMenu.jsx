import { Card, CardActions, CardTitle } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import React from 'react';
import { Component, PropTypes } from 'react';

const styles = {
    card: {
        paddingBottom: 14,
    },
    footer: {
        padding: '20px 0 25px',
        borderTop: '#ccc solid 1px',
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    items: {
        overflow: 'auto',
        flexShrink: 1,
    },
    noItemsMsg: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0',
    },
    itemBtns: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
};

class CollectionsMenu extends Component {
    renderItem(item, index) {
        const { show, play } = this.props;

        return (
            <Card
                key={index}
                style={styles.card}
            >
                <CardTitle
                    title={item.title}
                    subtitle={ 'links count: ' + item.links.length }
                />
                <CardActions style={styles.itemBtns}>
                    <RaisedButton label="Show" onClick={show.bind(null, item.id)} primary={true} />
                    <RaisedButton label="Play" onClick={play.bind(null, item.id)} primary={true} />
                </CardActions>
            </Card>
        );
    }

    render() {
        return (
            <div style={styles.container}>
                {
                    this.props.items.length ?
                    <div style={styles.items} >
                        { this.props.items.map(this.renderItem.bind(this)) }
                    </div> :
                    <div style={styles.noItemsMsg} >
                        There are no collections yet. Please, add one.
                    </div>
                }
                <div style={styles.footer}>
                    <FloatingActionButton onClick={this.props.newItem.bind(null, true)} >
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
}

CollectionsMenu.propTypes = {
    items: PropTypes.array.isRequired,
    newItem: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
    play: PropTypes.func.isRequired,
};

export default CollectionsMenu;
