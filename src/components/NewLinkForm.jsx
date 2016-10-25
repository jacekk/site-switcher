import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import React from 'react';
import { Component, PropTypes } from 'react';

const styles = {
    wrapper: {
        width: 300,
        borderLeft: '#ddd solid 1px',
        margin: '40px 0 20px 20px',
        padding: '0 30px',
    },
    header: {
        paddingTop: 10,
        marginBottom: 0,
        fontSize: '140%',
    },
    form: {
        paddingTop: 0,
    },
    btns: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    toggle: {
        padding: '14px 0 20px',
    },
};

const REQUIRED_FIELDS = ['url', 'title', 'duration'];

class NewLinkForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
            isFormValid: false,
        };
    }

    onInputChange() {
        this.validateFields();
    }

    validateFields() {
        const emptyFields = REQUIRED_FIELDS.filter(propName => {
            return this.refs[propName].getValue().trim() === '';
        })

        this.setState({
            isFormValid: emptyFields.length === 0,
        });
    }

    onToggle(name, ev, toggled) {
        this.setState({
            [name]: toggled,
        });
    }

    onSubmit() {
        this.props.actions.onSubmitCallback({
            title: this.refs.title.getValue(),
            url: this.refs.url.getValue(),
            duration: parseInt(this.refs.duration.getValue(), 10),
            isActive: this.state.isActive,
        });
    }

    render() {
        const { onCancel } = this.props.actions;

        return (
            <aside style={styles.wrapper}>
                <header style={styles.header} >
                    New link form
                </header>
                <form
                    style={styles.form}
                    onSubmit={this.onSubmit.bind(this)}
                >
                    <TextField
                        type="url"
                        floatingLabelText="URL"
                        ref="url"
                        fullWidth={true}
                        required
                        onChange={this.onInputChange.bind(this)}
                    />
                    <TextField
                        floatingLabelText="Title"
                        ref="title"
                        fullWidth={true}
                        required
                        onChange={this.onInputChange.bind(this)}
                    />
                    <TextField
                        type="number"
                        min="2"
                        max="3600"
                        step="1"
                        defaultValue={5}
                        floatingLabelText="Duration"
                        hintText="number of seconds"
                        ref="duration"
                        fullWidth={true}
                        required
                        onChange={this.onInputChange.bind(this)}
                    />
                    <Toggle
                        label="Is active?"
                        defaultToggled={true}
                        onToggle={this.onToggle.bind(this, 'isActive')}
                        style={styles.toggle}
                    />
                </form>
                <Divider />
                <div style={styles.btns} >
                    <RaisedButton
                        label="Cancel"
                        onClick={onCancel}
                    />
                    <RaisedButton
                        label="Save"
                        primary={true}
                        onClick={this.onSubmit.bind(this)}
                        disabled={! this.state.isFormValid}
                    />
                </div>
            </aside>
        );
    }
}

NewLinkForm.propTypes = {
    actions: PropTypes.shape({
        onCancel: PropTypes.func.isRequired,
        onSubmitCallback: PropTypes.func.isRequired,
    }),
}

export default NewLinkForm;
