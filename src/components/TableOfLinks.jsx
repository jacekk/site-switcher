import Checkbox from 'material-ui/Checkbox';
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

    renderRow(link, index, list) {
        const lastIndex = list.length - 1;
        const { moveUp, goTo, showBtns } = this.props;

        return (
            <TableRow key={index} selectable={false} >
                <TableRowColumn>{ link.title }</TableRowColumn>
                <TableRowColumn>
                    <a href={link.url} target="_blank" >{ link.url }</a>
                </TableRowColumn>
                {
                    showBtns && <TableRowColumn style={styles.cols.narrow} >
                        { link.duration }
                    </TableRowColumn>
                }
                {
                    showBtns && <TableRowColumn style={styles.cols.narrow} >
                        <Checkbox checked={link.isActive} disabled={true} />
                    </TableRowColumn>
                }
                {
                    showBtns && <TableRowColumn style={styles.cols.btn} >
                        { index !== 0 && <FlatButton label="up" onClick={moveUp.bind(this, index)} /> }
                    </TableRowColumn>
                }
                {
                    showBtns && <TableRowColumn style={styles.cols.btn} >
                        <FlatButton label="edit" onClick={goTo.bind(this, '/link/' + index )} />
                    </TableRowColumn>
                }
                {
                    showBtns && <TableRowColumn style={styles.cols.btn} >
                        <FlatButton label="remove" onClick={() => console.log('@todo removal confirmation page')} secondary={true} />
                    </TableRowColumn>
                }
            </TableRow>
        );
    }

    render() {
        const { links, showBtns } = this.props;

        return (
            <Table>
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                >
                    {
                        showBtns ?
                        <TableRow>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                            <TableHeaderColumn>URL</TableHeaderColumn>
                            <TableHeaderColumn style={styles.cols.narrow} >Duration</TableHeaderColumn>
                            <TableHeaderColumn style={styles.cols.narrow} >Active?</TableHeaderColumn>
                            <TableHeaderColumn style={styles.cols.btn} >Move</TableHeaderColumn>
                            <TableHeaderColumn style={styles.cols.btn} >Edit</TableHeaderColumn>
                            <TableHeaderColumn style={styles.cols.btn} >Remove</TableHeaderColumn>
                        </TableRow> :
                        <TableRow>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                            <TableHeaderColumn>URL</TableHeaderColumn>
                        </TableRow>
                    }
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
    showBtns: PropTypes.bool.isRequired,
    links: PropTypes.array.isRequired,
    goTo: PropTypes.func.isRequired,
    moveUp: PropTypes.func.isRequired,
};

export default TableOfLinks;
