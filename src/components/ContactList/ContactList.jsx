import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// ================
import Stat from '../Stat';
// import styles from './ContactList.module.scss';

import { connect } from 'react-redux';
import oper from '../../redux/phonebook/contacts-operations';
import { getVisibleContacts } from '../../redux/phonebook/contacts-selectors';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  TitleContainer: {
    display: 'flex',
    alignItems: 'baseline',
  },
  container: {
    width: '350px',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',

    width: '400px',
    border: '1px solid grey',
    borderRadius: '4px',
    padding: '10px',
  },
  number: {
    paddingRight: '20px',
  },
  table: {
    minWidth: 650,
  },
}));

const ContactList = ({ items, onDeleteContact, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.TitleContainer}>
        <h3 className="title">Contacts</h3>
        <Stat />
      </div>
      {children}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Number</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(({ id, name, number }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="left">{number}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    onClick={() => onDeleteContact(id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = state => ({
  items: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(oper.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
