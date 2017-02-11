import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import React from 'react';
import { Component, PropTypes } from 'react';
import isURL from 'validator/lib/isURL';

const styles = {
    wrapper: {
        margin: 20,
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
const URL_REQUIREMENTS = {
    protocols: ['http', 'https'],
    require_protocol: true,
    require_tld: false,
};

class NewLinkForm extends Component {

    constructor(props) {
        super(props);
        const { link } = this.props;

        this.state = {
            isActive: link.isActive !== undefined ? link.isActive : true,
            isFormValid: (link && link.title) || false,
        };
    }

    onInputChange(propName, ev, value) {
        this.props.link[propName] = value;
        this.validateFields();
    }

    validateFields() {
        const emptyFields = REQUIRED_FIELDS.filter(propName => {
            return this.refs[propName].getValue().trim() === '';
        })
        const noEmptyFields = emptyFields.length === 0;
        const urlValue = this.refs.url.getValue().trim();

        this.setState({
            isFormValid: noEmptyFields && isURL(urlValue, URL_REQUIREMENTS),
        });
    }

    onToggle(name, ev, toggled) {
        this.setState({
            [name]: ev.target.checked,
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
        const { link } = this.props;
        const { onCancel } = this.props.actions;

        return (
            <aside style={styles.wrapper}>
                <header style={styles.header} >
                    { this.props.title }
                </header>
                <form
                    style={styles.form}
                    onSubmit={this.onSubmit.bind(this)}
                >
                    <TextField
                        type="url"
                        floatingLabelText="URL"
                        hintText="http://example.com"
                        ref="url"
                        fullWidth={true}
                        required
                        defaultValue={link.url || ''}
                        onChange={this.onInputChange.bind(this, 'url')}
                    />
                    <TextField
                        floatingLabelText="Title"
                        ref="title"
                        fullWidth={true}
                        required
                        defaultValue={link.title || ''}
                        onChange={this.onInputChange.bind(this, 'title')}
                    />
                    <TextField
                        type="number"
                        min="2"
                        max="3600"
                        step="1"
                        floatingLabelText="Duration"
                        hintText="number of seconds"
                        ref="duration"
                        fullWidth={true}
                        required
                        defaultValue={link.duration || 5}
                        onChange={this.onInputChange.bind(this, 'duration')}
                    />
                    <Toggle
                        label="Is active?"
                        defaultToggled={this.state.isActive}
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
    title: PropTypes.string.isRequired,
    link: PropTypes.object.isRequired,
    actions: PropTypes.shape({
        onCancel: PropTypes.func.isRequired,
        onSubmitCallback: PropTypes.func.isRequired,
    }),
}

export default NewLinkForm;
