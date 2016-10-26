import { Component, PropTypes } from 'react';

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
    timeoutHandler;

    constructor(props) {
        super(props);
        this.timeoutHandler = setTimeout(
            this.playNext.bind(this),
            props.link.duration * 1e3
        );
    }

    playNext() {
        this.props.actions.playNextLink(
            this.props.nextLinkId,
            this.props.collectionId
        );
    }

    componentDidUpdate() {
        this.timeoutHandler = setTimeout(
            this.playNext.bind(this),
            this.props.link.duration * 1e3
        );
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandler);
    }

    render() {
        const { url } = this.props.link;

        return (
            <iframe
                src={url}
                style={styles.frame}
            ></iframe>
        );
    }
}

Player.propTypes = {
    nextLinkId: PropTypes.number.isRequired,
    collectionId: PropTypes.string.isRequired,
    link: PropTypes.object.isRequired,
    actions: PropTypes.shape({
        playNextLink: PropTypes.func.isRequired,
    }),
}

export default Player;
