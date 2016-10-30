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
    nothingToPlay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        fontSize: 30,
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
        if (this.props.link.url) {
            this.props.actions.playNextLink(this.props.nextLinkId);
        }
    }

    componentWillMount() {
        this.props.actions.collectionStartedPlaying(this.props.currLinkId);
    }

    componentDidUpdate() {
        this.props.actions.collectionStartedPlaying(this.props.currLinkId);
    }

    componentWillReceiveProps(newProps) {
        clearTimeout(this.timeoutHandler);
        this.timeoutHandler = setTimeout(
            this.playNext.bind(this),
            this.props.link.duration * 1e3
        );
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandler);
        this.timeoutHandler = null;
    }

    render() {
        const { url } = this.props.link;

        if (url) {
            return <iframe src={url} style={styles.frame} ></iframe>;
        }

        return (
            <div style={styles.nothingToPlay} >
                There is nothing to play. Please, add some links :)
            </div>
        );
    }
}

Player.propTypes = {
    nextLinkId: PropTypes.number.isRequired,
    currLinkId: PropTypes.number.isRequired,
    link: PropTypes.object.isRequired,
    actions: PropTypes.shape({
        collectionStartedPlaying: PropTypes.func.isRequired,
        playNextLink: PropTypes.func.isRequired,
    }),
}

export default Player;
