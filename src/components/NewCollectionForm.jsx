import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Component, PropTypes } from 'react';

const styles = {
    btn: {
        margin: '24px 10px 10px',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-end',
    },
};

class NewCollectionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTitle: 'abc',
            saveDisabled: true,
        };
    }

    onNewTitleChange(ev) {
        const val = ev.target.value || '';

        this.setState({
            newTitle: val,
            saveDisabled: ! val.length,
        });
    }

    onSubmit() {
        this.props.actions.save(this.state.newTitle);
    }

    render() {
        const { cancel } = this.props.actions;

        return (
            <div>
                <TextField
                    hintText="new collection title"
                    fullWidth={true}
                    onChange={this.onNewTitleChange.bind(this)}
                />
                <div style={styles.footer}>
                    <RaisedButton
                        label="Cancel"
                        style={styles.btn}
                        onClick={cancel.bind(this)}
                    />
                    <RaisedButton
                        label="Save"
                        primary={true}
                        style={styles.btn}
                        onClick={this.onSubmit.bind(this)}
                        disabled={this.state.saveDisabled}
                    />
                </div>
            </div>
        );
    }
}

NewCollectionForm.propTypes = {
    actions: PropTypes.shape({
        cancel: PropTypes.func.isRequired,
        save: PropTypes.func.isRequired,
    }),
};

export default NewCollectionForm;
