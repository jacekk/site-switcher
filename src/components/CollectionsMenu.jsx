import { Card, CardActions, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { Component, PropTypes } from 'react';

const styles = {
    card: {
        paddingBottom: 14,
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
                <CardActions>
                    <RaisedButton label="Show" onClick={show.bind(null, item.id)} secondary={true} />
                    <RaisedButton label="Play" onClick={play.bind(null, item.id)} primary={true} />
                </CardActions>
            </Card>
        );
    }

    render() {
        return (
            <div>
                { this.props.items.map(this.renderItem.bind(this)) }
            </div>
        );
    }
}

CollectionsMenu.propTypes = {
    items: PropTypes.array.isRequired,
    show: PropTypes.func.isRequired,
    play: PropTypes.func.isRequired,
};

export default CollectionsMenu;
