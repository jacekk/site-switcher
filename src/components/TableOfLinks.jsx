import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Component, PropTypes } from 'react';

const styles = {
    cols: {
        narrow: {
            width: '40px',
            textAlign: 'center',
        },
        btn: {
            width: '88px',
            textAlign: 'center',
        },
    },
    emptyListCell: {
        borderBottom: '#ddd solid 1px',
        textAlign: 'center',
    },
};

class TableOfLinks extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderRow(link, index, list) {
        const { moveUp, remove, goTo } = this.props;

        const closeRemovalDialog = () => {
            this.setState({
                ...this.state,
                [index]: false,
            });
        }
        const openRemovalDialog = () => {
            this.setState({
                ...this.state,
                [index]: true,
            });
        }
        const removeLinkConfirmed = () => {
            closeRemovalDialog();
            remove(index);
        }

        const removalActions = [
            <FlatButton
                label="Discard"
                onTouchTap={closeRemovalDialog}
            />,
            <FlatButton
                label="Remove"
                secondary={true}
                onTouchTap={removeLinkConfirmed}
            />,
        ];

        return (
            <TableRow key={index} selectable={false} >
                <TableRowColumn>{ link.title }</TableRowColumn>
                <TableRowColumn>
                    <a href={link.url} target="_blank" >{ link.url }</a>
                </TableRowColumn>
                <TableRowColumn style={styles.cols.narrow} >
                    { link.duration }
                </TableRowColumn>
                <TableRowColumn style={styles.cols.narrow} >
                    <Checkbox checked={link.isActive} disabled={true} />
                </TableRowColumn>
                <TableRowColumn style={styles.cols.btn} >
                    { index !== 0 && <FlatButton label="up" onClick={moveUp.bind(this, index)} /> }
                </TableRowColumn>
                <TableRowColumn style={styles.cols.btn} >
                    <FlatButton label="edit" onClick={goTo.bind(this, '/link/' + index )} />
                </TableRowColumn>
                <TableRowColumn style={styles.cols.btn} >
                    <FlatButton label="remove" onClick={openRemovalDialog} secondary={true} />
                    <Dialog
                        actions={removalActions}
                        modal={false}
                        open={this.state[index] || false}
                        onRequestClose={closeRemovalDialog}
                    >
                        Do you really want to remove "{link.title}" link?
                    </Dialog>
                </TableRowColumn>
            </TableRow>
        );
    }

    render() {
        const { links } = this.props;

        return (
            <Table>
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                >
                    <TableRow>
                        <TableHeaderColumn>Title</TableHeaderColumn>
                        <TableHeaderColumn>URL</TableHeaderColumn>
                        <TableHeaderColumn style={styles.cols.narrow} >Duration</TableHeaderColumn>
                        <TableHeaderColumn style={styles.cols.narrow} >Active?</TableHeaderColumn>
                        <TableHeaderColumn style={styles.cols.btn} >Move</TableHeaderColumn>
                        <TableHeaderColumn style={styles.cols.btn} >Edit</TableHeaderColumn>
                        <TableHeaderColumn style={styles.cols.btn} >Remove</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} >
                    {
                        links.length ?
                        links.map(this.renderRow.bind(this)) :
                        <TableRow selectable={false} >
                            <TableRowColumn colSpan="*" style={styles.emptyListCell} >
                                No links. Add at least one to play this collection.
                            </TableRowColumn>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        );
    }
}

TableOfLinks.propTypes = {
    links: PropTypes.array.isRequired,
    goTo: PropTypes.func.isRequired,
    moveUp: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default TableOfLinks;
