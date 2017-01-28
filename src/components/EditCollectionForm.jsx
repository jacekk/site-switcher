import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component, PropTypes } from 'react';

const styles = {
    btn: {
        margin: '24px 10px 10px',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-end',
    },
};

class EditCollectionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            saveDisabled: props.title === '',
        };
    }

    onTitleChange(ev) {
        const val = ev.target.value || '';

        this.setState({
            title: val,
            saveDisabled: ! val.length,
        });
    }

    onSubmit() {
        this.props.actions.save(this.state.title, this.props.id);
    }

    render() {
        const { cancel } = this.props.actions;
        const { title } = this.props;

        return (
            <div>
                <TextField
                    hintText="collection title"
                    fullWidth={true}
                    defaultValue={title}
                    onChange={this.onTitleChange.bind(this)}
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

EditCollectionForm.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    actions: PropTypes.shape({
        cancel: PropTypes.func.isRequired,
        save: PropTypes.func.isRequired,
    }),
};

export default EditCollectionForm;
