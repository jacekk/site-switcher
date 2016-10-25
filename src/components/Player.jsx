import { Component } from 'react';

const styles = {
    frame: {
        overflow: 'hidden',
        display: 'block',
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
        border: 0,
    },
};

class Player extends Component {
    render() {
        const url = 'http://example.com';

        return (
            <iframe
                src={url}
                style={styles.frame}
            ></iframe>
        );
    }
}

export default Player;
