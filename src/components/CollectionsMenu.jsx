import { Card, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from  'material-ui/FlatButton';
import React, { Component, PropTypes } from 'react';
import { REPO_URL } from '../constants/urls';

const styles = {
    card: {
        paddingBottom: 14,
    },
    footer: {
        display: 'flex',
        flexShrink: 0,
        flexBasis: '36px',
        padding: '20px 16px 22px',
        justifyContent: 'space-between',
        borderTop: '#ccc solid 1px',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
        const links = item.links || [];
        const activeLinksCount = links.filter(item => item.isActive).length;
        const subtitleTxt = `links count: ${links.length} | active: ${activeLinksCount}`;

        return (
            <Card
                key={index}
                style={styles.card}
            >
                <CardTitle
                    title={item.title}
                    subtitle={subtitleTxt}
                />
                <CardActions style={styles.itemBtns}>
                    <RaisedButton
                        label="Show"
                        onClick={show.bind(null, item.id)}
                    />
                    <RaisedButton
                        label="Play"
                        onClick={play.bind(null, item.id)}
                        disabled={! activeLinksCount}
                        primary={true}
                    />
                </CardActions>
            </Card>
        );
    }

    render() {
        const { items, newItem } = this.props;
        const ids = Object.keys(items);

        return (
            <div style={styles.container}>
                {
                    ids.length ?
                    <div style={styles.items} >
                        { ids.map(id => this.renderItem(items[id], id)) }
                    </div> :
                    <div style={styles.noItemsMsg} >
                        There are no collections yet. Please, add one.
                    </div>
                }
                <div style={styles.footer}>
                    <FlatButton
                        href={REPO_URL}
                        target="_blank"
                        label="Source"
                        secondary={false}
                        icon={<i className="fa fa-github fa-2x" />}
                    />
                    <RaisedButton
                        label="Add collection"
                        primary={true}
                        onClick={newItem.bind(null, true)}
                    />
                </div>
            </div>
        );
    }
}

CollectionsMenu.propTypes = {
    items: PropTypes.object.isRequired,
    newItem: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
    play: PropTypes.func.isRequired,
};

export default CollectionsMenu;
